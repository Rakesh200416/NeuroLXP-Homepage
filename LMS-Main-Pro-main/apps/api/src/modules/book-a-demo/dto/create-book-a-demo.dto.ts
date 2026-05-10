import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class CreateBookADemoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name!: string;

  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{7,15}$/)
  @MaxLength(15)
  phone!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  interest!: string;

  @IsBoolean()
  consent!: boolean;
}

