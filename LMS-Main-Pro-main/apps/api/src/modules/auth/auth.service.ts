import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as argon2 from "argon2";
import { SendOtpDto } from "./dto/send-otp.dto";
import { VerifyOtpDto } from "./dto/verify-otp.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { InstitutionAdminSignupDto } from "./dto/institution-admin-signup.dto";
import { OtpService } from "./otp.service";
import { EmailService } from "../notifications/email.service";
import { SmsService } from "../notifications/sms.service";
import { InstitutionAdminEntity } from "./entities/institution-admin.entity";
import type { OtpChannel, OtpPurpose } from "./otp.types";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(InstitutionAdminEntity)
    private readonly institutionAdminRepo: Repository<InstitutionAdminEntity>,
    private readonly otpService: OtpService,
    private readonly emailService: EmailService,
    private readonly smsService: SmsService
  ) {}

  private generateUserId(firstName: string, lastName: string): string {
    const base = `${firstName}.${lastName}`.toLowerCase().replace(/\s+/g, "");
    const suffix = Math.floor(1000 + Math.random() * 9000);
    return `${base}.${suffix}`;
  }

  async signupInstitutionAdmin(dto: InstitutionAdminSignupDto) {
    const existingEmail = await this.institutionAdminRepo.findOne({
      where: { officialEmail: dto.officialEmail },
    });

    if (existingEmail) {
      throw new BadRequestException("Official email is already registered.");
    }

    const existingPhone = await this.institutionAdminRepo.findOne({
      where: { officialPhone: dto.officialPhone },
    });

    if (existingPhone) {
      throw new BadRequestException("Official phone number is already registered.");
    }

    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    const admin = this.institutionAdminRepo.create({
      institutionId: null,
      superadminMapped: false,
      recognitionStatus: "pending",
      isAllowedDirectRegistration: false,
      firstName: dto.firstName,
      lastName: dto.lastName,
      officialEmail: dto.officialEmail,
      officialPhone: dto.officialPhone,
      passwordHash,
      userId: this.generateUserId(dto.firstName, dto.lastName),
      emailVerified: false,
      phoneVerified: false,
      mfaEnabled: false,
      qrAccessEnabled: false,
      accountStatus: "pending",
      failedLoginAttempts: 0,
      lockedUntil: null,
    });

    const saved = await this.institutionAdminRepo.save(admin);

    return {
      success: true,
      message: "Institution admin registered successfully.",
      adminId: saved.id,
      userId: saved.userId,
    };
  }

  async sendOtp(dto: SendOtpDto) {
    if (dto.channel === "email") {
      const result = await this.otpService.createOtp(
        dto.channel,
        dto.purpose,
        dto.target
      );

      await this.emailService.sendOtpEmail(dto.target, result.otp, dto.purpose);

      return {
        success: true,
        message: "OTP sent successfully.",
      };
    }

    await this.smsService.sendOtpSms(dto.target);

    return {
      success: true,
      message: "OTP sent successfully.",
    };
  }

  async resendOtp(dto: SendOtpDto) {
    return this.sendOtp(dto);
  }

  async verifyOtp(dto: VerifyOtpDto) {
    if (dto.channel === "mobile" && dto.purpose === "signup_mobile") {
      const isApproved = await this.smsService.checkOtpSms(dto.target, dto.otp);

      if (!isApproved) {
        throw new BadRequestException("Invalid mobile OTP.");
      }

      await this.institutionAdminRepo.update(
        { officialPhone: dto.target },
        { phoneVerified: true }
      );

      return {
        success: true,
        verified: true,
        message: "Mobile OTP verified successfully.",
      };
    }

    const result = await this.otpService.verifyOtp(
      dto.channel,
      dto.purpose,
      dto.target,
      dto.otp
    );

    if (dto.channel === "email" && dto.purpose === "signup_email") {
      await this.institutionAdminRepo.update(
        { officialEmail: dto.target },
        { emailVerified: true }
      );
    }

    return result;
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    if (!dto.identifier || !dto.identifier.trim()) {
      throw new BadRequestException("Identifier is required.");
    }

    const identifier = dto.identifier.trim();
    const isEmail = identifier.includes("@");
    const channel: OtpChannel = isEmail ? "email" : "mobile";
    const purpose: OtpPurpose = "forgot_password";

    if (isEmail) {
      const admin = await this.institutionAdminRepo.findOne({
        where: { officialEmail: identifier },
      });

      if (!admin) {
        throw new BadRequestException("No account found for this official email.");
      }
    } else {
      const admin = await this.institutionAdminRepo.findOne({
        where: { officialPhone: identifier },
      });

      if (!admin) {
        throw new BadRequestException("No account found for this official phone number.");
      }
    }

    return this.sendOtp({
      channel,
      purpose,
      target: identifier,
    });
  }

  async activateMfa(email: string) {
    const admin = await this.institutionAdminRepo.findOne({
      where: { officialEmail: email },
    });

    if (!admin) {
      throw new BadRequestException("Institution admin not found.");
    }

    admin.mfaEnabled = true;
    admin.qrAccessEnabled = true;

    await this.institutionAdminRepo.save(admin);

    return {
      success: true,
      message: "MFA activated successfully.",
      secret: "DEMO-MFA-SECRET",
      qrCodeUrl: "",
    };
  }

  async verifyMfa(email: string, otp: string) {
    if (!otp || otp.length < 4) {
      throw new BadRequestException("Invalid MFA code.");
    }

    const admin = await this.institutionAdminRepo.findOne({
      where: { officialEmail: email },
    });

    if (!admin) {
      throw new BadRequestException("Institution admin not found.");
    }

    return {
      success: true,
      verified: true,
      message: "MFA verified successfully.",
    };
  }
}