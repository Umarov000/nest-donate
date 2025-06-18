import {  Column, DataType, Model, Table } from "sequelize-typescript";

interface ICategory{
    name:string
}

@Table({ tableName: "category", timestamps: true })
export class Category extends Model<Category, ICategory> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    declare id?: number;

    @Column({type: DataType.STRING})
    declare name:string
}
