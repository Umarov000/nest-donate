import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "Ali Valiyev",
    description: "Foydalanuvchining to‘liq ismi",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "ali@example.com",
    description: "Foydalanuvchining email manzili",
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: "supersecret123",
    description: "Foydalanuvchining paroli (hash shaklida)",
  })
  @IsString()
  password_hash: string;

  @ApiProperty({
    example: "USER",
    description: "Foydalanuvchi roli (masalan: USER, ADMIN)",
  })
  @IsString()
  role: string;

  @ApiProperty({
    example: "Men dasturchiman",
    description: "Foydalanuvchi haqida qisqacha ma’lumot",
  })
  @IsString()
  bio: string;

  @ApiProperty({
    example: "https://example.com/avatar.png",
    description: "Avatar rasmi uchun URL",
  })
  @IsString()
  avatar_url: string;

  @ApiProperty({
    example: "https://example.com/banner.jpg",
    description: "Banner rasmi uchun URL",
  })
  @IsString()
  banner_url: string;
}
