import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("Notification") // Swagger UI’dagi guruh nomi
@Controller("notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @ApiOperation({ summary: "Yangi notification yaratish" })
  @ApiResponse({
    status: 201,
    description: "Bildirishnoma muvaffaqiyatli yaratildi",
  })
  @ApiResponse({ status: 400, description: "Noto‘g‘ri maʼlumot yuborilgan" })
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha bildirishnomalarni olish" })
  @ApiResponse({ status: 200, description: "Bildirishnomalar ro‘yxati" })
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta bildirishnomani olish" })
  @ApiParam({ name: "id", type: Number, description: "Bildirishnoma IDsi" })
  @ApiResponse({ status: 200, description: "Bildirishnoma topildi" })
  @ApiResponse({ status: 404, description: "Bildirishnoma topilmadi" })
  findOne(@Param("id") id: string) {
    return this.notificationService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Bildirishnomani yangilash" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Bildirishnoma yangilandi" })
  update(
    @Param("id") id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationService.update(+id, updateNotificationDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Bildirishnomani o‘chirish" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Bildirishnoma o‘chirildi" })
  remove(@Param("id") id: string) {
    return this.notificationService.remove(+id);
  }
}
