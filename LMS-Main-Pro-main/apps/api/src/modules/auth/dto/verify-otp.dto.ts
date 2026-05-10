import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import type { OtpChannel, OtpPurpose } from "../otp.types";

export class VerifyOtpDto {
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

  @IsString()
  @IsNotEmpty()
  @Length(4, 8)
  otp!: string;
}