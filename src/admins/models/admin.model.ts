import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { AdminRole } from "../../admin-role/models/admin-role.model";

interface IAdmin {
  full_name: string;
  email: string;
 
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
    type: DataType.STRING,
  })
  declare password_hash: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare is_active: boolean;
  
  @BelongsToMany(()=> Role, ()=>AdminRole)
      roles: Role[]
}
