import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Social } from "../../social/models/social.model";

interface ICreatorSocial {
  creatorId: number;
  socialId: number;
  url:string
}
@Table({ tableName: "creator_social" })
export class CreatorSocial extends Model<CreatorSocial, ICreatorSocial> {
    
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare creatorId: number;


  @ForeignKey(() => Social)
  @Column({
    type: DataType.INTEGER,
  })
  declare socialId: number;

  @Column({
    type:DataType.STRING
  })
  declare url:string

  
}

