import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SendOtpDto } from "./dto/send-otp.dto";
import { VerifyOtpDto } from "./dto/verify-otp.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { InstitutionAdminSignupDto } from "./dto/institution-admin-signup.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signup(@Body() dto: InstitutionAdminSignupDto) {
    return this.authService.signupInstitutionAdmin(dto);
  }

  @Post("send-otp")
  sendOtp(@Body() dto: SendOtpDto) {
    return this.authService.sendOtp(dto);
  }

  @Post("resend-otp")
  resendOtp(@Body() dto: SendOtpDto) {
    return this.authService.resendOtp(dto);
  }

  @Post("verify-otp")
  verifyOtp(@Body() dto: VerifyOtpDto) {
    return this.authService.verifyOtp(dto);
  }

  @Post("forgot-password")
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post("login")
  login(@Body() body: any) {
    return {
      success: true,
      message: "Login API working",
      requiresMfa: true,
      data: body,
    };
  }

  @Post("reset-password")
  resetPassword(@Body() body: any) {
    return {
      success: true,
      message: "Reset password API working",
      data: body,
    };
  }

  @Post("mfa/setup")
  setupMfa(@Body() body: { email: string }) {
    return this.authService.activateMfa(body.email);
  }

  @Post("mfa/verify")
  verifyMfa(@Body() body: { email: string; otp: string }) {
    return this.authService.verifyMfa(body.email, body.otp);
  }
}