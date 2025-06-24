import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreatorSocialService } from "./creator-social.service";
import { CreateCreatorSocialDto } from "./dto/create-creator-social.dto";
import { UpdateCreatorSocialDto } from "./dto/update-creator-social.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("CreatorSocial") // Swagger’da grouping nomi
@Controller("creator-social")
export class CreatorSocialController {
  constructor(private readonly creatorSocialService: CreatorSocialService) {}

  @Post()
  @ApiOperation({ summary: "Yaratuvchiga ijtimoiy tarmoq havolasi qo‘shish" })
  @ApiResponse({ status: 201, description: "Havola qo‘shildi" })
  @ApiResponse({ status: 400, description: "Noto‘g‘ri maʼlumot" })
  create(@Body() createCreatorSocialDto: CreateCreatorSocialDto) {
    return this.creatorSocialService.create(createCreatorSocialDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha yaratuvchi-havolalar ro‘yxatini olish" })
  @ApiResponse({
    status: 200,
    description: "Ro‘yxat muvaffaqiyatli qaytarildi",
  })
  findAll() {
    return this.creatorSocialService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Yaratuvchi-havola bo‘yicha maʼlumot olish" })
  @ApiParam({ name: "id", type: Number, description: "Havola IDsi" })
  @ApiResponse({ status: 200, description: "Topildi" })
  @ApiResponse({ status: 404, description: "Topilmadi" })
  findOne(@Param("id") id: string) {
    return this.creatorSocialService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Yaratuvchi-havolani yangilash" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli yangilandi" })
  update(
    @Param("id") id: string,
    @Body() updateCreatorSocialDto: UpdateCreatorSocialDto
  ) {
    return this.creatorSocialService.update(+id, updateCreatorSocialDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Yaratuvchi-havolani o‘chirish" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "O‘chirildi" })
  remove(@Param("id") id: string) {
    return this.creatorSocialService.remove(+id);
  }
}
