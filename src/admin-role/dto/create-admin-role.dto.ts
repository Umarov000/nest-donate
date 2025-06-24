import { Type } from "class-transformer";
import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminRoleDto {
  @ApiProperty({
    example: 1,
    description: "Rol ID (masalan: 1 - SUPERADMIN)",
  })
  @Type(() => Number)
  @IsNumber()
  roleId: number;

  @ApiProperty({
    example: 5,
    description: "Administrator foydalanuvchi IDsi",
  })
  @Type(() => Number)
  @IsNumber()
  adminId: number;
}
