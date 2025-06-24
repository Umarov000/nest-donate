import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({
    example: "ADMIN",
    description: "Rolenomi (masalan: ADMIN, SUPERADMIN, USER)",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Tizimni boshqarish huquqiga ega foydalanuvchi",
    description: "Rol haqida qisqacha tavsif",
  })
  @IsString()
  description: string;
}
