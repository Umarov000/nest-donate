import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("Products") // Swagger UI’da bu controllerni guruhlaydi
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: "Yangi mahsulot yaratish" })
  @ApiResponse({
    status: 201,
    description: "Mahsulot muvaffaqiyatli yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto‘g‘ri maʼlumotlar" })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha mahsulotlarni olish" })
  @ApiResponse({ status: 200, description: "Mahsulotlar ro‘yxati" })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta mahsulotni olish" })
  @ApiParam({ name: "id", type: Number, description: "Mahsulot IDsi" })
  @ApiResponse({ status: 200, description: "Mahsulot topildi" })
  @ApiResponse({ status: 404, description: "Mahsulot topilmadi" })
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Mahsulotni yangilash" })
  @ApiParam({ name: "id", type: Number, description: "Mahsulot IDsi" })
  @ApiResponse({ status: 200, description: "Mahsulot yangilandi" })
  @ApiResponse({ status: 404, description: "Mahsulot topilmadi" })
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Mahsulotni o‘chirish" })
  @ApiParam({ name: "id", type: Number, description: "Mahsulot IDsi" })
  @ApiResponse({ status: 200, description: "Mahsulot o‘chirildi" })
  @ApiResponse({ status: 404, description: "Mahsulot topilmadi" })
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
