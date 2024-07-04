import { Optional } from "sequelize";
import { User } from "../models/user";
import { sequelize } from "../database/db";

export const data: Optional<any, string>[] = [
  { name: "name1", favoriteColor: `red` },
  { name: "name2", favoriteColor: `blue` },
  { name: "name3", favoriteColor: `yellow` },
  { name: "name4", favoriteColor: `purple` },
  { name: "name5", favoriteColor: `pink` },
  { name: "name6", favoriteColor: `black` },
  { name: "name7", favoriteColor: `white` },
  { name: "name8", favoriteColor: `cyan` },
];

export const autoInsertInstance = async (
  dataList: Optional<any, string>[]
): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      dataList.forEach(async (d) => {
        await User.create(d);
        await sequelize.close();
      });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const userGenerator = async () => {
  await autoInsertInstance(data);
};
