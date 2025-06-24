import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductsImageDto {
  @ApiProperty({
    example: "https://example.com/images/product1.jpg",
    description: "Mahsulot rasmi URL manzili",
  })
  @IsString()
  image_url: string;

  @ApiProperty({
    example: true,
    description: "Asosiy rasm ekanligini bildiradi",
  })
  @IsBoolean()
  is_main: boolean;

  @ApiProperty({
    example: 12,
    description: "Ushbu rasm tegishli bo‘lgan mahsulot IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  productId: number;
}
