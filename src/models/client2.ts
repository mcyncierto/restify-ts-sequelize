import { Table, Column, Model, PrimaryKey, DataType } from "sequelize-typescript";

@Table
class Client extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  clientName!: string;

  @Column
  clientEmail!: string;

  @Column
  clientContact!: string;

  @Column
  createdBy!: string;

  @Column
  lastUpdatedBy!: string;

  @Column(DataType.DATE)
  createdAt!: Date;

  @Column(DataType.DATE)
  updatedAt!: Date;

  @Column(DataType.DATE)
  deletedAt!: Date;
}

export default Client;
