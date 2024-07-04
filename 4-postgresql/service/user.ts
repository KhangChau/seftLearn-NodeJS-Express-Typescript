import { sequelize } from "../database/db";
import { userGenerator } from "../dataSource/userData";
import { User } from "../models/user";
import { userPlayAround } from "../final/01-moduleInstance";

//// MODEL SYNCRHONIZATION
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
(async () => {
  await sequelize.sync();
  // Code here
  // userGenerator(); // use to generate data ONLY with empty data
  // ========================================================================
  await userPlayAround();
})();
