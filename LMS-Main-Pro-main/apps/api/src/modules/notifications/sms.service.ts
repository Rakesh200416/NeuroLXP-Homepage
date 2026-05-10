import { BadRequestException, Injectable } from "@nestjs/common";

const twilio = require("twilio");

@Injectable()
export class SmsService {
  private readonly client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  private readonly verifyServiceSid =
    process.env.TWILIO_VERIFY_SERVICE_SID;

  async sendOtpSms(phone: string) {
    if (!this.verifyServiceSid) {
      throw new BadRequestException("Twilio Verify Service SID is not configured.");
    }

    await this.client.verify.v2
      .services(this.verifyServiceSid)
      .verifications.create({
        to: phone,
        channel: "sms",
      });

    return true;
  }

  async checkOtpSms(phone: string, otp: string) {
    if (!this.verifyServiceSid) {
      throw new BadRequestException("Twilio Verify Service SID is not configured.");
    }

    const result = await this.client.verify.v2
      .services(this.verifyServiceSid)
      .verificationChecks.create({
        to: phone,
        code: otp,
      });

    return result.status === "approved";
  }
}