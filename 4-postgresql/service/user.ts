import { sequelize } from "../database/db";
import { userGenerator } from "../dataSource/userData";
// import { User } from "../models/user";
import { userPlayAround } from "../final/01-moduleInstance";
import {
  deleteAllUser,
  findAllUsers,
  findAllUsersByNameAndFavoriteColor,
  findAllUsersWithNameAndFavoriteColorAndAge,
  findAllUsers_Complex_ByNameAndIdAndAge,
  updateUserByField,
} from "../final/02-moduleQueryBasic";
import { printNickname } from "../final/04-moduleGetterSetterVirtual";
import {
  createFoo,
  testManyToMany,
  testOneToMany,
} from "../final/06-moduleAssociation";

//// MODEL SYNCRHONIZATION
// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// User.sync({ force: true }) - This creates the table, dropping it first if it already existed
// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
(async () => {
  await sequelize.sync();
  // Code here
  // await userGenerator(); // use to generate data ONLY with empty data
  // ========================================================================
  // await findAllUsersByNameAndFavoriteColor();
  // await findAllUsersWithNameAndFavoriteColorAndAge();
  // await findAllUsers_Complex_ByNameAndIdAndAge();
  // await deleteAllUser();
  // await updateUserByField();
  // await printNickname();
  // const user = await User.create()

  // createFoo();
  testManyToMany();
})();
