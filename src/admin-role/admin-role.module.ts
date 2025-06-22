import { Module } from '@nestjs/common';
import { AdminRoleService } from './admin-role.service';
import { AdminRoleController } from './admin-role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminRole } from './models/admin-role.model';

@Module({
  imports:[SequelizeModule.forFeature([AdminRole])],
  controllers: [AdminRoleController],
  providers: [AdminRoleService],
})
export class AdminRoleModule {}
