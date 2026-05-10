import { Body, Controller, Post, Req } from "@nestjs/common";
import type { Request } from "express";
import { CreateBookADemoDto } from "./dto/create-book-a-demo.dto";
import { BookADemoService } from "./book-a-demo.service";

@Controller("book-a-demo")
export class BookADemoController {
  constructor(private readonly service: BookADemoService) {}

  @Post()
  create(@Body() dto: CreateBookADemoDto, @Req() req: Request) {
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

