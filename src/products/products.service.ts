import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./models/product.model";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}
  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updatedData = await this.productModel.update(updateProductDto, {
      where: { id },
      returning: true,
    });
    return updatedData[1][0];
  }

  async remove(id: number) {
    const res = await this.productModel.destroy({ where: { id } });
    if (res > 0) {
      return `Product ochirildi`;
    }
    return `Product Mavjud emas`;
  }
}
