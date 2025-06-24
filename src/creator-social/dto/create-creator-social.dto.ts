import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCreatorSocialDto {
  @ApiProperty({
    example: 1,
    description: "Kontent yaratuvchi (creator) IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  creatorId: number;

  @ApiProperty({
    example: 2,
    description: "Ijtimoiy tarmoq (social) IDsi",
  })
  @IsNumber()
  @Type(() => Number)
  socialId: number;

  @ApiProperty({
    example: "https://t.me/example_username",
    description: "Yaratuvchining ijtimoiy tarmoqdagi havolasi",
  })
  @IsString()
  url: string;
}
