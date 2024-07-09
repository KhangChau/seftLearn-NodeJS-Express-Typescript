import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { User } from "./user";

export class Account extends Model {
  declare email: string;
  declare password: string;
}

Account.init(
  {
    email: {
      type: DataTypes.STRING,
    },
    password: { type: DataTypes.STRING },
  },
  {
    sequelize,
    modelName: "account",
    timestamps: false,
  }
);

User.hasOne(Account, {
  foreignKey: {
    name: "userId",
    type: DataTypes.UUID,
  },
});
Account.belongsTo(User);
