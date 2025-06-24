import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("Roles") // Swagger UI’dagi bo‘lim nomi
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: "Rol yaratish" })
  @ApiResponse({
    status: 201,
    description: "Rol muvaffaqiyatli yaratildi",
  })
  @ApiResponse({
    status: 400,
    description: "Yaroqsiz maʼlumotlar",
  })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha rollarni olish" })
  @ApiResponse({ status: 200, description: "Rollar ro‘yxati" })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta rolni olish" })
  @ApiParam({ name: "id", description: "Rol IDsi", type: Number })
  @ApiResponse({ status: 200, description: "Rol topildi" })
  @ApiResponse({ status: 404, description: "Rol topilmadi" })
  findOne(@Param("id") id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Rol maʼlumotlarini yangilash" })
  @ApiParam({ name: "id", description: "Rol IDsi", type: Number })
  @ApiResponse({ status: 200, description: "Rol yangilandi" })
  @ApiResponse({ status: 404, description: "Rol topilmadi" })
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Rolni o‘chirish" })
  @ApiParam({ name: "id", description: "Rol IDsi", type: Number })
  @ApiResponse({ status: 200, description: "Rol o‘chirildi" })
  @ApiResponse({ status: 404, description: "Rol topilmadi" })
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
