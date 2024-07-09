import { Op, Optional } from "sequelize";
import { User } from "../models/user";

const data: Optional<any, string> = {
  name: "ErlingHalaand",
  favoriteColor: `lightBlue`,
  age: 25,
  cash: 999999,
};
// // INSERT
// // ~~ CREATE INSTANCE OF MODEL
export const insertUserHalaand = async () => {
  const halaand = await User.create(data);
};

// SELECT
// simple select query
export const findAllUsers = async () => {
  const users: User[] = await User.findAll();

  console.log(`User List: \n`);
  users.forEach((user: User) => console.log(user.toJSON()));
};

// specify attributes for select query
export const findAllUsersWithNameAndFavoriteColorAndAge = async () => {
  const users: User[] = await User.findAll({
    attributes: ["name", ["favoriteColor", `favColor`], `age`],
  });
  console.log(`SELECT name, "favoriteColor" as favColor, age FROM users; \n`);
  users.forEach((user: User) => console.log(user.toJSON()));
};

// WHERE clause
export const findAllUsersByNameAndFavoriteColor = async () => {
  const users: User[] = await User.findAll({
    where: {
      [Op.and]: {
        name: {
          [Op.like]: "name%",
        },
        favoriteColor: `white`, // Sequelize assumed an equality comparison by default
      },
    }, // WHERE name LIKE 'name' AND "favoriteColor" = 'white';
  });

  console.log(`SELECT * FROM users
    WHERE name LIKE 'name%' AND "favoriteColor" = 'white'; \n`);
  users.forEach((user: User) => console.log(user.toJSON()));
};

// Logical combination
export const findAllUsers_Complex_ByNameAndIdAndAge = async () => {
  const users = await User.findAll({
    where: {
      [Op.not]: {
        name: { [Op.like]: `%me%` },
        [Op.and]: {
          id: { [Op.in]: [1, 2, 3] },
          age: { [Op.is]: null },
        },
      },
    },
  });
  console.log(` SELECT * FROM users
WHERE (
  name LIKE '%name%'
   AND NOT (
    id IN (1,2,3) AND age IS NULL
    )
)\n`);
  users.forEach((user: User) => console.log(user.toJSON()));
};

//DELETE
export const deleteAllUser = async () => {
  await User.destroy({
    truncate: true,
  });
};

//UPDATE
export const updateUserByField = async () => {
  const result: any[] = await User.update(
    { name: "name-update" },
    {
      where: {
        favoriteColor: "cyan",
      },
    }
  );
  console.log(result);
};

// Ordering - Grouping

// LIMITATION - PAGINATION

// Utilization ~ COUNT, MAX-MIN, SUM, incre-decrement
