import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Admin } from "../../admins/models/admin.model";
import { Role } from "../../roles/models/role.model";

interface IAdminRole {
  roleId: number;
  adminId: number;
}

@Table({ tableName: "admin_role" })
export class AdminRole extends Model<AdminRole, IAdminRole> {
  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
  })
  declare adminId: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  declare roleId: number;
}
