import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { OtpService } from "./otp.service";
import { OtpVerificationEntity } from "./entities/otp-verification.entity";
import { InstitutionAdminEntity } from "./entities/institution-admin.entity";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([OtpVerificationEntity, InstitutionAdminEntity]),
    NotificationsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, OtpService],
  exports: [AuthService, OtpService],
})
export class AuthModule {}