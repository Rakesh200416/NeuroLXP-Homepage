import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("otp_verifications")
export class OtpVerificationEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 20 })
  channel!: string;

  @Column({ type: "varchar", length: 255 })
  target!: string;

  @Column({ type: "varchar", length: 50 })
  purpose!: string;

  @Column({ type: "varchar", length: 255 })
  otpHash!: string;

  @Column({ type: "int", default: 0 })
  attempts!: number;

  @Column({ type: "int", default: 0 })
  resendCount!: number;

  @Column({ type: "boolean", default: false })
  verified!: boolean;

  @Column({ type: "timestamp" })
  expiresAt!: Date;

  @Column({ type: "timestamp", nullable: true })
  cooldownUntil!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}