import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({
    example: "Technology",
    description: "Kategoriya nomi (masalan: Sport, Texnologiya, Dasturlash...)",
  })
  @IsString()
  name: string;
}
