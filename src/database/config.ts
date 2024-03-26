import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "ttpr_db",
  dialect: "mysql",
  username: "root",
  password: "admin",
  storage: ":memory:",
  host: "localhost",
  port: 3306,
  models: [__dirname + "/models"],
});
