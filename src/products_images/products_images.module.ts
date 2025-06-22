import { Module } from '@nestjs/common';
import { ProductsImagesService } from './products_images.service';
import { ProductsImagesController } from './products_images.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsImage } from './models/products_image.model';

@Module({
  imports:[SequelizeModule.forFeature([ProductsImage])],
  controllers: [ProductsImagesController],
  providers: [ProductsImagesService],
})
export class ProductsImagesModule {}
