import {
    BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Category } from "../../categories/models/category.model";

interface IProduct {
  name: string;
  description: string;
  in_stock: number;
  is_available: boolean;
  price: number;
  creatorId: number;
  categoryId: number;
}
@Table({ tableName: "products" })
export class Product extends Model<Product, IProduct> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({ type: DataType.STRING(40) })
  declare name: string;
  @Column({ type: DataType.TEXT })
  declare description: string;

  @Column({ type: DataType.INTEGER })
  declare in_stock: number;

  @Column({ type: DataType.BOOLEAN })
  declare is_available: boolean;

  @Column({ type: DataType.DECIMAL(15, 2) })
  declare price: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare creatorId: number;
  @BelongsTo(() => User)
  declare creator: User;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  declare categoryId: number;
  @BelongsTo(() => Category)
  declare category: Category;
}
