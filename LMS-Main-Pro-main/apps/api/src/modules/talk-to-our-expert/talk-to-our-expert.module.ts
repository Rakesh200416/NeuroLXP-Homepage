import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationsModule } from "../notifications/notifications.module";
import { TalkToOurExpertController } from "./talk-to-our-expert.controller";
import { TalkToOurExpertService } from "./talk-to-our-expert.service";
import { TalkToOurExpertRequestEntity } from "./entities/talk-to-our-expert-request.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TalkToOurExpertRequestEntity]), NotificationsModule],
  controllers: [TalkToOurExpertController],
  providers: [TalkToOurExpertService],
})
export class TalkToOurExpertModule {}

