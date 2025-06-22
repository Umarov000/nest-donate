import { Injectable } from "@nestjs/common";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Donation } from "./models/donation.model";

@Injectable()
export class DonationService {
  constructor(@InjectModel(Donation) private donationModel: typeof Donation) {}
  async create(createDonationDto: CreateDonationDto) {
    return await this.donationModel.create(createDonationDto);
  }

  findAll() {
    return this.donationModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.donationModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    const updatedDonation = await this.donationModel.update(updateDonationDto, {
      where: { id },
      returning: true,
    });

    return updatedDonation[1][0];
  }

  async remove(id: number) {
    const res = await this.donationModel.destroy({ where: { id } });
    if (res > 0) {
      return "Donation  ochirildi ";
    }
    return `Bunday Donation mavjud emas`;
  }
}
