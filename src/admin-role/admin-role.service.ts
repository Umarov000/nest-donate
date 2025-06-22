import { Injectable } from '@nestjs/common';
import { CreateAdminRoleDto } from './dto/create-admin-role.dto';
import { UpdateAdminRoleDto } from './dto/update-admin-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AdminRole } from './models/admin-role.model';

@Injectable()
export class AdminRoleService {
  constructor(@InjectModel(AdminRole) private adminRoleModel: typeof AdminRole) {
    
  }
  async create(createAdminRoleDto: CreateAdminRoleDto) {
    return await this.adminRoleModel.create(createAdminRoleDto)
  }

  findAll() {
    return this.adminRoleModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.adminRoleModel.findByPk(id, { include: { all: true } });

  }

  async update(id: number, updateAdminRoleDto: UpdateAdminRoleDto) {
   const updatedData = await this.adminRoleModel.update(updateAdminRoleDto, {where:{id}, returning:true})
   return updatedData[1][0]
  }

  async remove(id: number) {
    const res = await this.adminRoleModel.destroy({where:{id}})
    if (res > 0) return `AdminRole Ochirildi`;
    return `Bunday AdminRole Mavjud emas`;
   
  }
}
