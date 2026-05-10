import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationsModule } from "../notifications/notifications.module";
import { BookADemoController } from "./book-a-demo.controller";
import { BookADemoService } from "./book-a-demo.service";
import { BookADemoRequestEntity } from "./entities/book-a-demo-request.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BookADemoRequestEntity]), NotificationsModule],
  controllers: [BookADemoController],
  providers: [BookADemoService],
})
export class BookADemoModule {}

