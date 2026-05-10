import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./modules/auth/auth.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { OtpVerificationEntity } from "./modules/auth/entities/otp-verification.entity";
import { InstitutionAdminEntity } from "./modules/auth/entities/institution-admin.entity";
import { BookADemoModule } from "./modules/book-a-demo/book-a-demo.module";
import { BookADemoRequestEntity } from "./modules/book-a-demo/entities/book-a-demo-request.entity";
import { TalkToOurExpertModule } from "./modules/talk-to-our-expert/talk-to-our-expert.module";
import { TalkToOurExpertRequestEntity } from "./modules/talk-to-our-expert/entities/talk-to-our-expert-request.entity";
import { ContactUsModule } from "./modules/contact-us/contact-us.module";
import { ContactUsRequestEntity } from "./modules/contact-us/entities/contact-us-request.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", "../../.env"],
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL || undefined,
      host: process.env.DATABASE_URL ? undefined : process.env.POSTGRES_HOST || "localhost",
      port: process.env.DATABASE_URL ? undefined : Number(process.env.POSTGRES_PORT || 5432),
      username: process.env.DATABASE_URL ? undefined : process.env.POSTGRES_USER || "postgres",
      password: process.env.DATABASE_URL ? undefined : process.env.POSTGRES_PASSWORD || "",
      database: process.env.DATABASE_URL ? undefined : process.env.POSTGRES_DB || "signup_db",
      ssl: process.env.DATABASE_URL
        ? { rejectUnauthorized: false }
        : process.env.POSTGRES_SSL === "true"
          ? { rejectUnauthorized: false }
          : false,
      entities: [
        OtpVerificationEntity,
        InstitutionAdminEntity,
        BookADemoRequestEntity,
        TalkToOurExpertRequestEntity,
        ContactUsRequestEntity,
      ],
      synchronize: true,
    }),
    AuthModule,
    NotificationsModule,
    BookADemoModule,
    TalkToOurExpertModule,
    ContactUsModule,
  ],
})
export class AppModule {}