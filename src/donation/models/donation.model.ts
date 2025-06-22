import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";

interface IDonation {
  supporterId: number;
  creatorId: number;
  amount: number;
  message: string;
  payment_method: string;
  is_anonymous: boolean;
}

@Table({ tableName: "donations" })
export class Donation extends Model<Donation, IDonation> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
  })
  declare amount: number;

  @Column({
    type: DataType.TEXT,
  })
  declare message: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare payment_method: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  declare is_anonymous: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare supporterId: number;

  @BelongsTo(() => User)
  declare suppoerter: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare creatorId: number;

  @BelongsTo(() => User)
  declare creator: User;
}
