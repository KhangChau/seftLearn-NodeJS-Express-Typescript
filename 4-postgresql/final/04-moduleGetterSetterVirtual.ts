// visit ./models/user

import { sequelize } from "../database/db";
import { User } from "../models/user";

export const printNickname = async () => {
  const user = await User.findOne({
    where: {
      name: `name1`,
    },
  });

  if (user != null) {
    console.log(user.nickname);
  } else {
    console.log("no nickname");
  }

  await sequelize.close();
};
