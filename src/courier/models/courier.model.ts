import { Table, Model, DataType, Column } from "sequelize-typescript";

interface ICourier{
    full_name:string
    phone_number:string
    vehicle_type:string
    vehicle_plate_number:string
    is_active:boolean
}

@Table({ tableName: "courier", timestamps: true })
export class Courier extends Model<Courier, ICourier> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({ type: DataType.STRING })
  declare full_name: string;

  @Column({ type: DataType.STRING })
  declare phone_number: string;

  @Column({ type: DataType.STRING })
  declare vehicle_type: string;

  @Column({ type: DataType.STRING })
  declare vehicle_plate_number: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_active: boolean;
}
