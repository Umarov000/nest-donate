import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourierService } from './courier.service';
import { CreateCourierDto } from './dto/create-courier.dto';
import { UpdateCourierDto } from './dto/update-courier.dto';

@Controller("api")
export class CourierController {
  constructor(private readonly courierService: CourierService) {}

  @Post("courier")
  create(@Body() createCourierDto: CreateCourierDto) {
    return this.courierService.create(createCourierDto);
  }

  @Get("courier")
  findAll() {
    return this.courierService.findAll();
  }

  @Get("courier/:id")
  findOne(@Param("id") id: string) {
    return this.courierService.findOne(+id);
  }

  @Patch("courier/:id")
  update(@Param("id") id: string, @Body() updateCourierDto: UpdateCourierDto) {
    return this.courierService.update(+id, updateCourierDto);
  }

  @Delete("courier/:id")
  remove(@Param("id") id: string) {
    return this.courierService.remove(+id);
  }
}
