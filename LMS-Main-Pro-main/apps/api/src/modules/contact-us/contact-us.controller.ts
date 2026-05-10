import { Body, Controller, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { ContactUsService } from "./contact-us.service";

@Controller("contact-us")
export class ContactUsController {
  constructor(private readonly service: ContactUsService) {}

  @Post()
  create(@Body() dto: CreateContactUsDto, @Req() req: Request) {
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

