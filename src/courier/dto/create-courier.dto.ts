import { IsBoolean, IsPhoneNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCourierDto {
  @ApiProperty({
    example: "Ali Karimov",
    description: "Kuryerning to‘liq ismi",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Telefon raqami (UZ formatda)",
  })
  @IsPhoneNumber("UZ")
  phone_number: string;

  @ApiProperty({
    example: "velosiped",
    description: "Transport turi (masalan: velosiped, mashina, motosikl)",
  })
  @IsString()
  vehicle_type: string;

  @ApiProperty({
    example: "01A123BC",
    description: "Transportning davlat raqam belgisi",
  })
  @IsString()
  vehicle_plate_number: string;

  @ApiProperty({
    example: true,
    description: "Faollik holati: true - faol, false - nofaol",
  })
  @IsBoolean()
  is_active: boolean;
}
