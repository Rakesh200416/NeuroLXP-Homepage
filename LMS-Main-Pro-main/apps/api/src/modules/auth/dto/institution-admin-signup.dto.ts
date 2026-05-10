import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from "class-validator";

export class InstitutionAdminSignupDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  officialEmail!: string;

  @IsString()
  @IsNotEmpty()
  officialPhone!: string;

  @IsString()
  @MinLength(8)
  @Matches(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
  @Matches(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
  @Matches(/[0-9]/, { message: "Password must contain at least one digit." })
  @Matches(/[^A-Za-z0-9]/, {
    message: "Password must contain at least one special character.",
  })
  password!: string;
}