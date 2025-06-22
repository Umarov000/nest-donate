import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Social } from "../../social/models/social.model";
import { CreatorSocial } from "../../creator-social/models/creator-social.model";

interface IUser {
  full_name: string;
  email: string;
  password_hash: string;
  role: string;
  bio: string;
  avatar_url: string;
  banner_url: string;
}

@Table({ tableName: "user", timestamps: true })
export class User extends Model<User, IUser> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare full_name: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password_hash: string;

  @Column({
    type: DataType.STRING,
  })
  declare role: string;

  @Column({
    type: DataType.STRING,
  })
  declare bio: string;

  @Column({
    type: DataType.STRING,
  })
  declare avatar_url: string;

  @Column({
    type: DataType.STRING,
  })
  declare banner_url: string;
  @BelongsToMany(()=> Social, ()=>CreatorSocial)
    socials: Social[]
}
