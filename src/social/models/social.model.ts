import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ISocial {
  name: string;
  social_icon: string;
}

@Table({ tableName: "social", timestamps: true })
export class Social extends Model<Social, ISocial> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare social_icon: string;
}
