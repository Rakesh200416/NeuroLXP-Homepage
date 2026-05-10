import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmailService } from "../notifications/email.service";
import { CreateBookADemoDto } from "./dto/create-book-a-demo.dto";
import { BookADemoRequestEntity } from "./entities/book-a-demo-request.entity";

@Injectable()
export class BookADemoService {
  constructor(
    @InjectRepository(BookADemoRequestEntity)
    private readonly repo: Repository<BookADemoRequestEntity>,
    private readonly emailService: EmailService
  ) {}

  async create(
    dto: CreateBookADemoDto,
    meta: { ip?: string | null; userAgent?: string | null }
  ) {
    if (!dto.consent) {
      throw new BadRequestException("Consent is required.");
    }

    const entity = this.repo.create({
      ...dto,
      phone: dto.phone.replace(/\s/g, ""),
      ip: meta.ip ?? null,
      userAgent: meta.userAgent ?? null,
    });

    const saved = await this.repo.save(entity);

    await this.emailService.sendBookADemoRequest({
      to: "contentops@prgeeq.com",
      requestId: saved.id,
      name: saved.name,
      email: saved.email,
      phone: saved.phone,
      interest: saved.interest,
      consent: saved.consent,
      createdAt: saved.createdAt,
      ip: saved.ip ?? undefined,
      userAgent: saved.userAgent ?? undefined,
    });

    return { success: true, id: saved.id };
  }
}

