import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateNotificationDto {
  @ApiProperty({
    example: 42,
    description: "Bildirishnoma yuboriladigan foydalanuvchi IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  userId: number;

  @ApiProperty({
    example: "Sizga yangi xabar bor",
    description: "Foydalanuvchiga yuboriladigan matnli xabar",
  })
  @IsString()
  message: string;
}
