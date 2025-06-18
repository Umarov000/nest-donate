import { Injectable } from "@nestjs/common";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Social } from "./models/social.model";

@Injectable()
export class SocialService {
  constructor(@InjectModel(Social) private socialModel: typeof Social) {}
  async create(createSocialDto: CreateSocialDto) {
    const social = await this.socialModel.create(createSocialDto);
    return social;
  }

  async findAll(): Promise<Social[]> {
    return await this.socialModel.findAll();
  }

  async findOne(id: number): Promise<Social | null> {
    return await this.socialModel.findByPk(id);
  }

  async update(id: number, updateSocialDto: UpdateSocialDto) {
    const updatedSocial = await this.socialModel.update(updateSocialDto, {
      where: { id },
      returning: true,
    });
    
    return updatedSocial[1][0]
  }

  async remove(id: number): Promise<string> {
    const res = await this.socialModel.destroy({ where: { id } });
    if (res > 0) {
      return `Social ochirildi`;
    }
    return `${id}-Bunday Social mavjud emas`;
  }
}
