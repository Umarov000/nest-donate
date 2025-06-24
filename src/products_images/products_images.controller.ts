import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductsImagesService } from "./products_images.service";
import { CreateProductsImageDto } from "./dto/create-products_image.dto";
import { UpdateProductsImageDto } from "./dto/update-products_image.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("Products Images") // Swagger UI'da bo'lim nomi
@Controller("products-images")
export class ProductsImagesController {
  constructor(private readonly productsImagesService: ProductsImagesService) {}

  @Post()
  @ApiOperation({ summary: "Mahsulot rasmi yaratish" })
  @ApiResponse({
    status: 201,
    description: "Mahsulot rasmi muvaffaqiyatli yaratildi",
  })
  @ApiResponse({ status: 400, description: "Yaroqsiz maʼlumotlar" })
  create(@Body() createProductsImageDto: CreateProductsImageDto) {
    return this.productsImagesService.create(createProductsImageDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha mahsulot rasmlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Mahsulot rasmlari ro‘yxati",
  })
  findAll() {
    return this.productsImagesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta mahsulot rasm maʼlumotini olish" })
  @ApiParam({ name: "id", type: Number, description: "Rasm IDsi" })
  @ApiResponse({ status: 200, description: "Rasm topildi" })
  @ApiResponse({ status: 404, description: "Rasm topilmadi" })
  findOne(@Param("id") id: string) {
    return this.productsImagesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Mahsulot rasm maʼlumotini yangilash" })
  @ApiParam({ name: "id", type: Number, description: "Rasm IDsi" })
  @ApiResponse({ status: 200, description: "Rasm yangilandi" })
  @ApiResponse({ status: 404, description: "Rasm topilmadi" })
  update(
    @Param("id") id: string,
    @Body() updateProductsImageDto: UpdateProductsImageDto
  ) {
    return this.productsImagesService.update(+id, updateProductsImageDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Mahsulot rasm maʼlumotini o‘chirish" })
  @ApiParam({ name: "id", type: Number, description: "Rasm IDsi" })
  @ApiResponse({ status: 200, description: "Rasm o‘chirildi" })
  @ApiResponse({ status: 404, description: "Rasm topilmadi" })
  remove(@Param("id") id: string) {
    return this.productsImagesService.remove(+id);
  }
}
