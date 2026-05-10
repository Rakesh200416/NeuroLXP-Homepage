import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "contact_us_requests" })
export class ContactUsRequestEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 120 })
  name!: string;

  @Column({ type: "varchar", length: 254 })
  email!: string;

  @Column({ type: "varchar", length: 15 })
  phone!: string;

  @Column({ type: "varchar", length: 250 })
  message!: string;

  @Column({ type: "boolean" })
  consent!: boolean;

  @Column({ type: "varchar", length: 64, nullable: true })
  ip?: string | null;

  @Column({ type: "varchar", length: 512, nullable: true })
  userAgent?: string | null;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt!: Date;
}

