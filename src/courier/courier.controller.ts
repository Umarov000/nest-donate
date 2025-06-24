import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CourierService } from "./courier.service";
import { CreateCourierDto } from "./dto/create-courier.dto";
import { UpdateCourierDto } from "./dto/update-courier.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from "@nestjs/swagger";

@ApiTags("Courier") // Swagger UI’dagi grouping uchun
@Controller("courier")
export class CourierController {
  constructor(private readonly courierService: CourierService) {}

  @Post()
  @ApiOperation({ summary: "Yangi kuryer qo‘shish" })
  @ApiResponse({
    status: 201,
    description: "Kuryer muvaffaqiyatli yaratildi",
  })
  @ApiResponse({
    status: 400,
    description: "Noto‘g‘ri maʼlumot",
  })
  create(@Body() createCourierDto: CreateCourierDto) {
    return this.courierService.create(createCourierDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha kuryerlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Kuryerlar ro‘yxati qaytarildi",
  })
  findAll() {
    return this.courierService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta kuryerni olish" })
  @ApiParam({ name: "id", type: Number, description: "Kuryer IDsi" })
  @ApiResponse({
    status: 200,
    description: "Kuryer topildi",
  })
  @ApiResponse({
    status: 404,
    description: "Kuryer topilmadi",
  })
  findOne(@Param("id") id: string) {
    return this.courierService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Kuryerni yangilash" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({
    status: 200,
    description: "Kuryer muvaffaqiyatli yangilandi",
  })
  update(@Param("id") id: string, @Body() updateCourierDto: UpdateCourierDto) {
    return this.courierService.update(+id, updateCourierDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Kuryerni o‘chirish" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({
    status: 200,
    description: "Kuryer o‘chirildi",
  })
  remove(@Param("id") id: string) {
    return this.courierService.remove(+id);
  }
}
