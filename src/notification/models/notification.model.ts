import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript"
import { User } from "../../users/models/user.model";

interface INotification{
    userId:number
    message:Text
}

@Table({ tableName: "notification" })
export class Notification {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.TEXT })
  declare message: Text;

  @ForeignKey(()=>User)
  @Column({ type: DataType.INTEGER , onDelete:"CASCADE"})
  userId: number;

  @BelongsTo(()=>User)
  user:User
}
