import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

// CREATE MODEL
export class User extends Model {
  declare name: string;
  declare favoriteColor: string;
  declare age: number;
  declare cash: number;
}
User.init(
  {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: "green",
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "user", // We need to choose the model name <- first letter should not be capitalized!

    // disable 2 default timpestamps fields
    timestamps: false,
    // // don't forget to enable timestamps!
    // timestamps: true,

    // // I don't want createdAt
    // createdAt: false,

    // // I want updatedAt to actually be called updateTimestamp
    // updatedAt: "updateTimestamp",
  }
);
