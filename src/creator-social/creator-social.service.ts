import { Injectable } from "@nestjs/common";
import { CreateCreatorSocialDto } from "./dto/create-creator-social.dto";
import { UpdateCreatorSocialDto } from "./dto/update-creator-social.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CreatorSocial } from "./models/creator-social.model";

@Injectable()
export class CreatorSocialService {
  constructor(
    @InjectModel(CreatorSocial) private creatorSocialModel: typeof CreatorSocial
  ) {}
  async create(createCreatorSocialDto: CreateCreatorSocialDto) {
    return await this.creatorSocialModel.create(createCreatorSocialDto);
  }

  findAll() {
    return this.creatorSocialModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.creatorSocialModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateCreatorSocialDto: UpdateCreatorSocialDto) {
    const updatedData = await this.creatorSocialModel.update(
      updateCreatorSocialDto,
      { where: { id }, returning: true }
    );
    return updatedData[1][0]
  }

  async remove(id: number) {
    const res = await this.creatorSocialModel.destroy({where:{id}})
    if(res>0) return `Creator-Social ochirildi`
    return `Bunday Creator-Social mavjud emas`;
  }
}
