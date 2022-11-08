import { Table, Model, Column, DataType } from "sequelize-typescript";
export interface registrationI {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  password: string;
  phoneNo: number;
  dob: Date;
}

@Table({
  tableName: "demo_registration",
  freezeTableName: true,
  timestamps: false,
  underscored: true,
})
export default class demoRegistration extends Model implements registrationI {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: DataType.INTEGER,
    field: "registration_id",
  })
  id!: number;

  @Column({
    allowNull: false,
    field: "title",
    type: DataType.STRING,
    defaultValue: "",
  })
  title!: string;

  @Column({
    allowNull: false,
    field: "first_name",
    type: DataType.STRING,
    defaultValue: "",
  })
  firstName!: string;

  @Column({
    allowNull: false,
    field: "last_name",
    type: DataType.STRING,
    defaultValue: "",
  })
  lastName!: string;

  @Column({
    allowNull: false,
    field: "full_name",
    type: DataType.STRING,
    defaultValue: "",
  })
  fullName!: string;

  @Column({
    allowNull: false,
    field: "email",
    type: DataType.STRING,
    defaultValue: "",
  })
  email!: string;

  @Column({
    allowNull: false,
    field: "password",
    type: DataType.STRING,
    defaultValue: "",
  })
  password!: string;

  @Column({
    allowNull: false,
    field: "phone_no",
    type: DataType.STRING(10),
    defaultValue: 0,
  })
  phoneNo!: number;

  @Column({
    allowNull: false,
    field: "dob",
    type: DataType.DATE,
  })
  dob!: Date;
}
