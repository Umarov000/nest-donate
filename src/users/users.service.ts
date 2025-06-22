import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create(createUserDto);
  }

  async findAll() {
    return this.userModel.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    return this.userModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
  const updatedUser = await this.userModel.update(updateUserDto, {where:{id}, returning:true})
  if(!updatedUser[1][0]){
    return `User topilmadi`;
  }
  return updatedUser[1][0]

  }

  async remove(id: number) {
    const res = await this.userModel.destroy({where:{id}})
    if(res>0){
      return `User ochirildi`
    }
    return `User topilmadi`
}
}
