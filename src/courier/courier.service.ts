import { Injectable } from "@nestjs/common";
import { CreateCourierDto } from "./dto/create-courier.dto";
import { UpdateCourierDto } from "./dto/update-courier.dto";
import { Courier } from "./models/courier.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class CourierService {
  constructor(@InjectModel(Courier) private courierModel: typeof Courier) {}
  async create(createCourierDto: CreateCourierDto) {
    const courier = await this.courierModel.create(createCourierDto);

    return courier;
  }

  async findAll(): Promise<Courier[]> {
    return await this.courierModel.findAll();
  }

  async findOne(id: number): Promise<Courier | null> {
    return await this.courierModel.findByPk(id);
  }

  async update(id: number, updateCourierDto: UpdateCourierDto) {
    const updatedCourier = await this.courierModel.update(updateCourierDto, {where:{id}, returning:true})
    return updatedCourier[1][0]
  }

  async remove(id: number):Promise<string> {
    const res = await this.courierModel.destroy({where:{id}})
    if(res>0){
      return `Courier ochirildi`
    }
    return `Courier Mavjud emas`;

    
  }
}
