import { Module } from '@nestjs/common';
import { CourierService } from './courier.service';
import { CourierController } from './courier.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Courier } from './models/courier.model';

@Module({
  imports:[SequelizeModule.forFeature([Courier])],
  controllers: [CourierController],
  providers: [CourierService],
})
export class CourierModule {}
