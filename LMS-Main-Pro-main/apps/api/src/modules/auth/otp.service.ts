import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createHmac, timingSafeEqual } from "crypto";
import { OtpVerificationEntity } from "./entities/otp-verification.entity";
import type { OtpChannel, OtpPurpose } from "./otp.types";

@Injectable()
export class OtpService {
  private readonly otpTtlSeconds = Number(process.env.OTP_EXPIRY_SECONDS ?? 300);
  private readonly resendCooldownSeconds = Number(
    process.env.OTP_RESEND_COOLDOWN_SECONDS ?? 30
  );
  private readonly maxAttempts = Number(process.env.OTP_MAX_ATTEMPTS ?? 10);
  private readonly maxResends = Number(process.env.OTP_MAX_RESENDS ?? 3);
  private readonly hashSecret = process.env.OTP_HASH_SECRET || "change_me";

  constructor(
    @InjectRepository(OtpVerificationEntity)
    private readonly otpRepo: Repository<OtpVerificationEntity>
  ) {}

  private hashOtp(otp: string): string {
    return createHmac("sha256", this.hashSecret).update(otp).digest("hex");
  }

  private compareOtp(plainOtp: string, storedHash: string): boolean {
    const incoming = Buffer.from(this.hashOtp(plainOtp));
    const existing = Buffer.from(storedHash);
    return incoming.length === existing.length && timingSafeEqual(incoming, existing);
  }

  private generateOtp(length = 6): string {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
  }

  async createOtp(channel: OtpChannel, purpose: OtpPurpose, target: string) {
    const now = new Date();

    let record = await this.otpRepo.findOne({
      where: { channel, purpose, target },
    });

    if (record?.cooldownUntil && record.cooldownUntil.getTime() > now.getTime()) {
      throw new BadRequestException("Please wait before requesting another OTP.");
    }

    const resendCount = record ? record.resendCount + 1 : 1;
    if (resendCount > this.maxResends) {
      throw new BadRequestException("Maximum OTP resend limit reached.");
    }

    const otp = this.generateOtp();

    if (!record) {
      record = this.otpRepo.create({
        channel,
        purpose,
        target,
        otpHash: this.hashOtp(otp),
        attempts: 0,
        resendCount,
        verified: false,
        expiresAt: new Date(now.getTime() + this.otpTtlSeconds * 1000),
        cooldownUntil: new Date(now.getTime() + this.resendCooldownSeconds * 1000),
      });
    } else {
      record.otpHash = this.hashOtp(otp);
      record.attempts = 0;
      record.resendCount = resendCount;
      record.verified = false;
      record.expiresAt = new Date(now.getTime() + this.otpTtlSeconds * 1000);
      record.cooldownUntil = new Date(now.getTime() + this.resendCooldownSeconds * 1000);
    }

    await this.otpRepo.save(record);

    return {
      otp,
      expiresInSeconds: this.otpTtlSeconds,
    };
  }

  async verifyOtp(
    channel: OtpChannel,
    purpose: OtpPurpose,
    target: string,
    otp: string
  ) {
    const record = await this.otpRepo.findOne({
      where: { channel, purpose, target },
    });

    if (!record) {
      throw new BadRequestException("OTP expired or not found.");
    }

    if (record.verified) {
      throw new BadRequestException("OTP already verified.");
    }

    if (Date.now() > record.expiresAt.getTime()) {
      await this.otpRepo.remove(record);
      throw new BadRequestException("OTP expired.");
    }

    if (!this.compareOtp(otp, record.otpHash)) {
      record.attempts += 1;

      if (record.attempts >= this.maxAttempts) {
        await this.otpRepo.remove(record);
        throw new BadRequestException("Maximum OTP verification attempts exceeded.");
      }

      await this.otpRepo.save(record);
      throw new BadRequestException("Invalid OTP.");
    }

    record.verified = true;
    await this.otpRepo.save(record);

    return {
      success: true,
      verified: true,
      message: "OTP verified successfully.",
    };
  }

  async consumeVerifiedOtp(channel: OtpChannel, purpose: OtpPurpose, target: string) {
    const record = await this.otpRepo.findOne({
      where: { channel, purpose, target },
    });

    if (!record || !record.verified) {
      throw new BadRequestException("OTP has not been verified.");
    }

    await this.otpRepo.remove(record);
    return true;
  }
}
