import { Body, Controller, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { CreateTalkToOurExpertDto } from "./dto/create-talk-to-our-expert.dto";
import { TalkToOurExpertService } from "./talk-to-our-expert.service";

@Controller("talk-to-our-expert")
export class TalkToOurExpertController {
  constructor(private readonly service: TalkToOurExpertService) {}

  @Post()
  create(@Body() dto: CreateTalkToOurExpertDto, @Req() req: Request) {
    const ip =
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ??
      req.ip ??
      null;
    const userAgent = req.headers["user-agent"] ?? null;

    return this.service.create(dto, {
      ip,
      userAgent: typeof userAgent === "string" ? userAgent : null,
    });
  }
}

