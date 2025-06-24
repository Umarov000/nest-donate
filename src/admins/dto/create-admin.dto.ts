import { IsBoolean, IsString, IsStrongPassword } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({
    example: "Abbos Qodirov",
    description: "Administratorning тўлиқ исми",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "admin@example.com",
    description: "Administrator электрон почтаси",
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: "admin1234",
    description: "Parol (камida 6 та белги, рақамлар ёки катта ҳарф шарт эмас)",
  })
  @IsStrongPassword({
    minLength: 6,
    minSymbols: 0,
    minUppercase: 0,
    minNumbers: 0,
  })
  password_hash: string;

  @ApiProperty({
    example: true,
    description: "Faollik ҳолати: true - faol, false - nofaol",
  })
  @IsBoolean()
  is_active: boolean;
}
