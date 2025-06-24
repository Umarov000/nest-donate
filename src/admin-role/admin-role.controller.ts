import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AdminRoleService } from "./admin-role.service";
import { CreateAdminRoleDto } from "./dto/create-admin-role.dto";
import { UpdateAdminRoleDto } from "./dto/update-admin-role.dto";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from "@nestjs/swagger";

@ApiTags("Admin Roles") // Swagger grouping
@ApiBearerAuth() // JWT authentication (agar ishlatilsa)
@Controller("admin-role")
export class AdminRoleController {
  constructor(private readonly adminRoleService: AdminRoleService) {}

  @Post()
  @ApiOperation({ summary: "Admin uchun rol biriktirish" })
  @ApiResponse({ status: 201, description: "Rol muvaffaqiyatли бириктирилди" })
  @ApiResponse({ status: 400, description: "Noto‘g‘ri maʼlumotlar" })
  create(@Body() createAdminRoleDto: CreateAdminRoleDto) {
    return this.adminRoleService.create(createAdminRoleDto);
  }

  @Get()
  @ApiOperation({ summary: "Admin rol bog‘ланмаларини рўйхати" })
  @ApiResponse({
    status: 200,
    description: "Бошқа маълумотлар билан қайтарилади",
  })
  findAll() {
    return this.adminRoleService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Бирор бир admin-role муносабатини олиш" })
  @ApiParam({ name: "id", type: Number, description: "AdminRole ID" })
  @ApiResponse({ status: 200, description: "Топилди" })
  @ApiResponse({ status: 404, description: "Топилмади" })
  findOne(@Param("id") id: string) {
    return this.adminRoleService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Admin rol муносабатини янгилаш" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Муваффақиятли янгиланди" })
  update(
    @Param("id") id: string,
    @Body() updateAdminRoleDto: UpdateAdminRoleDto
  ) {
    return this.adminRoleService.update(+id, updateAdminRoleDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Admin rol муносабатини ўчириш" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Муваффақиятли ўчирилди" })
  remove(@Param("id") id: string) {
    return this.adminRoleService.remove(+id);
  }
}
