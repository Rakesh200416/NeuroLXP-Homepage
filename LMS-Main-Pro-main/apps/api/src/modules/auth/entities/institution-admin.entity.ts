import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("institution_admins")
export class InstitutionAdminEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "uuid", nullable: true })
  institutionId!: string | null;

  @Column({ type: "boolean", default: false })
  superadminMapped!: boolean;

  @Column({ type: "varchar", length: 30, default: "pending" })
  recognitionStatus!: string;

  @Column({ type: "boolean", default: false })
  isAllowedDirectRegistration!: boolean;

  @Column({ type: "varchar", length: 100 })
  firstName!: string;

  @Column({ type: "varchar", length: 100 })
  lastName!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  officialEmail!: string;

  @Column({ type: "varchar", length: 20, unique: true })
  officialPhone!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  passwordHash!: string | null;

  @Column({ type: "varchar", length: 100, unique: true, nullable: true })
  userId!: string | null;

  @Column({ type: "boolean", default: false })
  emailVerified!: boolean;

  @Column({ type: "boolean", default: false })
  phoneVerified!: boolean;

  @Column({ type: "boolean", default: false })
  mfaEnabled!: boolean;

  @Column({ type: "boolean", default: false })
  qrAccessEnabled!: boolean;

  @Column({ type: "varchar", length: 30, default: "pending" })
  accountStatus!: string;

  @Column({ type: "int", default: 0 })
  failedLoginAttempts!: number;

  @Column({ type: "timestamp", nullable: true })
  lockedUntil!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}