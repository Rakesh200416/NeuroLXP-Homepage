import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationsModule } from "../notifications/notifications.module";
import { ContactUsController } from "./contact-us.controller";
import { ContactUsService } from "./contact-us.service";
import { ContactUsRequestEntity } from "./entities/contact-us-request.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ContactUsRequestEntity]), NotificationsModule],
  controllers: [ContactUsController],
  providers: [ContactUsService],
})
export class ContactUsModule {}

