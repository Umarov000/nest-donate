import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SocialService } from "./social.service";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("Social")
@Controller("social")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  @ApiOperation({ summary: "Yangi ijtimoiy tarmoq qo‘shish" })
  @ApiResponse({ status: 201, description: "Yaratildi" })
  create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(createSocialDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha ijtimoiy tarmoqlarni olish" })
  @ApiResponse({ status: 200, description: "Muvaffaqiyatli" })
  findAll() {
    return this.socialService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "ID bo‘yicha ijtimoiy tarmoqni olish" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Topildi" })
  @ApiResponse({ status: 404, description: "Topilmadi" })
  findOne(@Param("id") id: string) {
    return this.socialService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Ijtimoiy tarmoq maʼlumotlarini yangilash" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Yangilandi" })
  update(@Param("id") id: string, @Body() updateSocialDto: UpdateSocialDto) {
    return this.socialService.update(+id, updateSocialDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Ijtimoiy tarmoqni o‘chirish" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "O‘chirildi" })
  remove(@Param("id") id: string) {
    return this.socialService.remove(+id);
  }
}
