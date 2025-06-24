import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSocialDto {
  @ApiProperty({
    example: "Instagram",
    description: "Ijtimoiy tarmoq nomi",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    description: "Ijtimoiy tarmoq ikonkasining URL manzili",
  })
  @IsString()
  social_icon: string;
}
