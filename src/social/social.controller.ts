import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';

@Controller("api")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post("social")
  create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(createSocialDto);
  }

  @Get("social")
  findAll() {
    return this.socialService.findAll();
  }

  @Get("social/:id")
  findOne(@Param("id") id: string) {
    return this.socialService.findOne(+id);
  }

  @Patch("social/:id")
  update(@Param("id") id: string, @Body() updateSocialDto: UpdateSocialDto) {
    return this.socialService.update(+id, updateSocialDto);
  }

  @Delete("social/:id")
  remove(@Param("id") id: string) {
    return this.socialService.remove(+id);
  }
}
