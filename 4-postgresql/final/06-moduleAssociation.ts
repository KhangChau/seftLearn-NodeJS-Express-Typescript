//// Defining the Sequelize associations

import { DataTypes, Op, QueryTypes } from "sequelize";
import { sequelize } from "../database/db";
import { Account } from "../models/account";
import { Bill } from "../models/bill";
import { Project } from "../models/project";
import { User } from "../models/user";

// const A = sequelize.define('A' /* ... */);
// const B = sequelize.define('B' /* ... */);

// A.hasOne(B); // A HasOne B
// A.belongsTo(B); // A BelongsTo B
// A.hasMany(B); // A HasMany B
// A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

//(***)//Special methods/mixins added to instances
export const createFoo = async () => {
  const account = await Account.create({
    email: "name1@gg.co",
    password: "123",
  });
  const user = await User.findOne({
    where: {
      id: 9,
    },
  });
  //   console.log(user?.toJSON());
  await user?.setAccount(account);
  console.log((await user?.getAccount()).toJSON());

  await sequelize.close();
};

export const testOneToMany = async () => {
  const user = await User.findOne({
    where: {
      id: 10,
    },
  });

  //   console.log(user?.toJSON());

  await user?.createBill({
    fb: "123",
  });

  const list: Bill[] = await user?.getBills();
  list.forEach((l) => console.log(l.toJSON()));

  await sequelize.close();
};

export const testManyToMany = async () => {
  const project = await Project.findOne({
    where: {
      name: `pAAA`,
    },
  });

  //   const project = await Project.create({
  //     name: "2pBBB",
  //   });

  const users = await User.findAll({
    where: {
      favoriteColor: ["cyan", "pink"],
    },
  });

  console.log(project?.toJSON());
  //   console.log(user?.toJSON());
  users.forEach((user) => {
    console.log(user.toJSON());
  });

  //   await project.createUser(toString(user[0]));
  const res = await project?.addUsers(users);
  //   console.log(res);
  //   await user[0].addProject(project);

  await sequelize.close();
};
