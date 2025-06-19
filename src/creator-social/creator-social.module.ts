import { Module } from '@nestjs/common';
import { CreatorSocialService } from './creator-social.service';
import { CreatorSocialController } from './creator-social.controller';

@Module({
  controllers: [CreatorSocialController],
  providers: [CreatorSocialService],
})
export class CreatorSocialModule {}
