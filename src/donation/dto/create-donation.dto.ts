import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDonationDto {
  @ApiProperty({
    example: 5,
    description: "Homiy (supporter) IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  supporterId: number;

  @ApiProperty({
    example: 2,
    description: "Kontent yaratuvchi (creator) IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  creatorId: number;

  @ApiProperty({
    example: 10000,
    description: "Homiylik summasi",
  })
  @IsNumber()
  @Type(() => Number)
  amount: number;

  @ApiProperty({
    example: "Ishingizga omad!",
    description: "Homiy tomonidan qoldirilgan xabar",
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: "click",
    description: "To‘lov usuli (masalan: click, payme, karta)",
  })
  @IsString()
  payment_method: string;

  @ApiProperty({
    example: true,
    description: "Anonim tarzda homiylik qilingan bo‘lsa true",
  })
  @IsBoolean()
  is_anonymous: boolean;
}
