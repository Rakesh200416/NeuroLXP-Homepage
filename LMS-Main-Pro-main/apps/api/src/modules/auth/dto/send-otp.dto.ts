import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import type { OtpChannel, OtpPurpose } from "../otp.types";

export class SendOtpDto {
  @IsString()
  @IsNotEmpty()
  target!: string;

  @IsEnum({ email: "email", mobile: "mobile" })
  channel!: OtpChannel;

  @IsEnum({
    signup_email: "signup_email",
    signup_mobile: "signup_mobile",
    forgot_password: "forgot_password",
    login_challenge: "login_challenge",
  })
  purpose!: OtpPurpose;
}