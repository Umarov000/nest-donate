import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller("api")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post("admin")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }

  @Get("admin")
  findAll() {
    return this.adminsService.findAll();
  }

  @Get("admin/:id")
  findOne(@Param("id") id: string) {
    return this.adminsService.findOne(+id);
  }

  @Patch("admin/:id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete("admin/:id")
  remove(@Param("id") id: string) {
    return this.adminsService.remove(+id);
  }
}
