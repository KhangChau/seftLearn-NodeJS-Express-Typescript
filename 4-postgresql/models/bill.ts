import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { User } from "./user";

export class Bill extends Model {
  //   declare id: string;
  declare fb: string;
}

Bill.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    fb: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "bill",
    timestamps: false,
  }
);

// User.hasMany(Bill, {
//   foreignKey: "idUser",
// });
// Bill.belongsTo(User);
