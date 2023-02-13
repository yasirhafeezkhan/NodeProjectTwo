import { Table, Model, Column, DataType } from "sequelize-typescript";
export interface qualificationI {
  qualName: string;
  instituteName: string;
}

@Table({
  tableName: "demo_qualification",
  freezeTableName: true,
  timestamps: false,
  underscored: true,
})
export default class demoQualification extends Model implements qualificationI {
  @Column({
    allowNull: false,
    field: "qual_name",
    type: DataType.STRING,
    defaultValue: "",
  })
  qualName!: string;

  @Column({
    allowNull: false,
    field: "institute_name",
    type: DataType.STRING,
    defaultValue: "",
  })
  instituteName!: string;
}
