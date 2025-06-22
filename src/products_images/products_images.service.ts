import { Injectable } from "@nestjs/common";
import { CreateProductsImageDto } from "./dto/create-products_image.dto";
import { UpdateProductsImageDto } from "./dto/update-products_image.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ProductsImage } from "./models/products_image.model";

@Injectable()
export class ProductsImagesService {
  constructor(
    @InjectModel(ProductsImage) private productImageModel: typeof ProductsImage
  ) {}
  async create(createProductsImageDto: CreateProductsImageDto) {
    return await this.productImageModel.create(createProductsImageDto)
  }

  findAll() {
    return this.productImageModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.productImageModel.findByPk(id, { include: { all: true } });

  }

  async update(id: number, updateProductsImageDto: UpdateProductsImageDto) {
    const updatedData = await this.productImageModel.update(
      updateProductsImageDto,
      {
        where: { id },
        returning: true,
      }
    );
    return updatedData[1][0];
  }

  async remove(id: number) {
    const res = await this.productImageModel.destroy({ where: { id } });
    if (res > 0) {
      return `Product-Image ochirildi`;
    }
    return `Product-Image Mavjud emas`;
  }
}
