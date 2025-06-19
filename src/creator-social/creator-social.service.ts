import { Injectable } from '@nestjs/common';
import { CreateCreatorSocialDto } from './dto/create-creator-social.dto';
import { UpdateCreatorSocialDto } from './dto/update-creator-social.dto';

@Injectable()
export class CreatorSocialService {
  create(createCreatorSocialDto: CreateCreatorSocialDto) {
    return 'This action adds a new creatorSocial';
  }

  findAll() {
    return `This action returns all creatorSocial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creatorSocial`;
  }

  update(id: number, updateCreatorSocialDto: UpdateCreatorSocialDto) {
    return `This action updates a #${id} creatorSocial`;
  }

  remove(id: number) {
    return `This action removes a #${id} creatorSocial`;
  }
}
