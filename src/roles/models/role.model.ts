import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { AdminRole } from "../../admin-role/models/admin-role.model";
import { Admin } from "../../admins/models/admin.model";

interface IRole {
  name: string;
  description: string;
}

@Table({ tableName: "role" })
export class Role extends Model<Role, IRole> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id?: number;

  @Column({
    type: DataType.STRING(50),
    unique: true,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull:true
  })
  declare description: string;

  @BelongsToMany(() => Admin, () => AdminRole)
  admins: Admin[];
}
