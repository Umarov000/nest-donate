import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private categoryModel: typeof Category) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryModel.create(createCategoryDto);
    return newCategory;
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.findAll();
  }

  async findOne(id: number): Promise<Category| null> {
    return await this.categoryModel.findByPk(id);
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {

     const updatedData = await this.categoryModel.update(updateCategoryDto, {where:{id}, returning:true})
     return updatedData[1][0];
  }

  async remove(id: number) {
    const res = await this.categoryModel.destroy({where:{id}})
    if(res>0){
      return `Categoriya ochirildi.`
    }
    return `Categoriya mavjud emas`
  }
}
