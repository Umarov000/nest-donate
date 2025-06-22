import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";

interface IProductImage {
  image_url: string;
  is_main: boolean;
  productId: number;
}
@Table({ tableName: "product_image" })
export class ProductsImage extends Model<ProductsImage, IProductImage> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({
    type: DataType.STRING,
  })
  declare image_url: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  declare is_main: boolean;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  declare productId: number;
  @BelongsTo(() => Product)
  declare products: Product;
}
