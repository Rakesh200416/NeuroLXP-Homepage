import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmailService } from "../notifications/email.service";
import { CreateContactUsDto } from "./dto/create-contact-us.dto";
import { ContactUsRequestEntity } from "./entities/contact-us-request.entity";

@Injectable()
export class ContactUsService {
  constructor(
    @InjectRepository(ContactUsRequestEntity)
    private readonly repo: Repository<ContactUsRequestEntity>,
    private readonly emailService: EmailService
  ) {}

  async create(
    dto: CreateContactUsDto,
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

    await this.emailService.sendContactUsRequest({
      to: "contentops@prgeeq.com",
      requestId: saved.id,
      name: saved.name,
      email: saved.email,
      phone: saved.phone,
      message: saved.message,
      consent: saved.consent,
      createdAt: saved.createdAt,
      ip: saved.ip ?? undefined,
      userAgent: saved.userAgent ?? undefined,
    });

    return { success: true, id: saved.id };
  }
}

