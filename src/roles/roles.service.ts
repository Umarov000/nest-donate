import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {
    
  }
  async create(createRoleDto: CreateRoleDto) {
    return await this.roleModel.create(createRoleDto);
  }

  findAll() {
    return this.roleModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
   const updatedData = await this.roleModel.update(updateRoleDto, {where:{id}, returning:true})
   return updatedData[1][0]
  }

  async remove(id: number) {
    const res = await this.roleModel.destroy({where:{id}})

    if(res>0) return `Role Ochirildi`
    return `Bunday Role Mavjud emas`
    
  }
}
