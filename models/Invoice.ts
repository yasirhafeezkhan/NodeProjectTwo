import { Table, Model, Column, DataType } from "sequelize-typescript";
export interface invoiceI {
  id: number;
  address: string;
  invoiceNo: string;
  invoiceDate: Date;
  invoiceDesc: string;
  amount: number;
}

@Table({
  tableName: "invoice",
  freezeTableName: true,
  timestamps: false,
  underscored: true,
})
export default class invoice extends Model implements invoiceI {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: DataType.INTEGER,
    field: "invoice_id",
  })
  id!: number;

  @Column({
    allowNull: false,
    field: "address",
    type: DataType.STRING,
    defaultValue: "",
  })
  address!: string;

  @Column({
    allowNull: false,
    field: "invoice_no",
    type: DataType.STRING,
    defaultValue: "",
  })
  invoiceNo!: string;

  @Column({
    allowNull: true,
    field: "invoice_date",
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  invoiceDate!: Date;

  @Column({
    allowNull: false,
    field: "invoice_desc",
    type: DataType.STRING(100),
    defaultValue: "",
  })
  invoiceDesc!: string;

  @Column({
    allowNull: false,
    field: "amount",
    type: DataType.STRING(100),
    defaultValue: 0,
  })
  amount!: number;
}
