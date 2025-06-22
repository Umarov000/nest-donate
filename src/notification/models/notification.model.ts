import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../users/models/user.model";

interface INotification {
  userId: number;
  message: string; 
}
@Table({ tableName: "notifications" }) 
export class Notification extends Model<Notification, INotification> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.TEXT })
  declare message: string; 

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;
}
