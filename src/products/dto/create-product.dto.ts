import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({
    example: "Smartfon Xiaomi 13",
    description: "Mahsulot nomi",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Flagman model, 256GB, 12GB RAM",
    description: "Mahsulot tavsifi",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 100,
    description: "Ombordagi mavjud mahsulot soni",
  })
  @IsNumber()
  @Type(() => Number)
  in_stock: number;

  @ApiProperty({
    example: true,
    description: "Mahsulot sotuvda mavjud yoki yo‘qligi",
  })
  @IsBoolean()
  is_available: boolean;

  @ApiProperty({
    example: 299.99,
    description: "Mahsulot narxi (USD)",
  })
  @IsNumber()
  @Type(() => Number)
  price: number;

  @ApiProperty({
    example: 1,
    description: "Mahsulotni yaratgan creator IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  creatorId: number;

  @ApiProperty({
    example: 2,
    description: "Mahsulot tegishli bo‘lgan kategoriya IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  categoryId: number;
}
