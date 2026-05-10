import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmailService } from "../notifications/email.service";
import { CreateTalkToOurExpertDto } from "./dto/create-talk-to-our-expert.dto";
import { TalkToOurExpertRequestEntity } from "./entities/talk-to-our-expert-request.entity";

@Injectable()
export class TalkToOurExpertService {
  constructor(
    @InjectRepository(TalkToOurExpertRequestEntity)
    private readonly repo: Repository<TalkToOurExpertRequestEntity>,
    private readonly emailService: EmailService
  ) {}

  async create(
    dto: CreateTalkToOurExpertDto,
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

    await this.emailService.sendTalkToOurExpertRequest({
      to: "contentops@prgeeq.com",
      requestId: saved.id,
      name: saved.name,
      email: saved.email,
      phone: saved.phone,
      interest: saved.interest,
      message: saved.message,
      consent: saved.consent,
      createdAt: saved.createdAt,
      ip: saved.ip ?? undefined,
      userAgent: saved.userAgent ?? undefined,
    });

    return { success: true, id: saved.id };
  }
}

