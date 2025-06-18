import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdmin {
  full_name: string;
  email: string;
  phone: string;
  role: string;
  password_hash: string;
  is_active: boolean;
}
@Table({ tableName: "admin", timestamps: true })
export class Admin extends Model<Admin, IAdmin> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare email: string;

  @Column({
    type: DataType.STRING(15),
  })
  declare phone: string;

  @Column({
    type: DataType.STRING,
  })
  declare role: string;

  @Column({
    type: DataType.STRING,
  })
  declare password_hash: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_active: boolean;
}
