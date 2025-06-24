import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DonationService } from "./donation.service";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("Donation") // Swagger UI’dagi grouping nomi
@Controller("donation")
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  @ApiOperation({ summary: "Yangi donation (homiylik) yaratish" })
  @ApiResponse({ status: 201, description: "Donation yaratildi" })
  @ApiResponse({ status: 400, description: "Noto‘g‘ri so‘rov" })
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationService.create(createDonationDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha donationlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Ro‘yxat muvaffaqiyatli qaytarildi",
  })
  findAll() {
    return this.donationService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Bitta donationni olish" })
  @ApiParam({ name: "id", type: Number, description: "Donation IDsi" })
  @ApiResponse({ status: 200, description: "Donation topildi" })
  @ApiResponse({ status: 404, description: "Donation topilmadi" })
  findOne(@Param("id") id: string) {
    return this.donationService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Donationni yangilash" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({
    status: 200,
    description: "Donation muvaffaqiyatli yangilandi",
  })
  update(
    @Param("id") id: string,
    @Body() updateDonationDto: UpdateDonationDto
  ) {
    return this.donationService.update(+id, updateDonationDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Donationni o‘chirish" })
  @ApiParam({ name: "id", type: Number })
  @ApiResponse({ status: 200, description: "Donation o‘chirildi" })
  remove(@Param("id") id: string) {
    return this.donationService.remove(+id);
  }
}
