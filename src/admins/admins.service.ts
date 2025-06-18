import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin) private adminModule: typeof Admin) {}
  async create(createAdminDto: CreateAdminDto) {
    const newAdmin = await this.adminModule.create(createAdminDto);
    return newAdmin;
  }

  async findAll(): Promise<Admin[]> {
    return await this.adminModule.findAll();
  }

  async findOne(id: number): Promise<Admin | null> {
    return await this.adminModule.findByPk(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
   const updatedAdmin = await this.adminModule.update(updateAdminDto, {where:{id}, returning:true})
   return updatedAdmin[1][0]
  }

  async remove(id: number) {
   const res = await this.adminModule.destroy({where:{id}})
   if (res > 0) {
     return `Admin ochirildi`;
   }
   return `Admin Mavjud emas`;
   
  }
}
