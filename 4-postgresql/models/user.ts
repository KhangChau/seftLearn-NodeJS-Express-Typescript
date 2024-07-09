import { Association, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { Account } from "./account";
import { Bill } from "./bill";
import { Project } from "./project";

// CREATE MODEL
class User extends Model {
  declare name: string;
  declare favoriteColor: string;
  declare age: number;
  declare cash: number;
  declare nickname: string;
  // declare static associations: {
  //   projects: Association<User, Project>;
  // };
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

    //virtual field <- it doesn't exist in model User
    nickname: {
      type: DataTypes.VIRTUAL,
      // setter definition
      set(value) {
        throw new Error(`don't try to assign value to virtual field!`);
      },
      //getter definition
      get() {
        const val: string = `${this.name}_${this.age}-san`;
        return val;
      },
    },
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

// Association

// User.hasOne(Account);
// Account.belongsTo(User, {
//   foreignKey: {
//     name: "userId",
//     type: DataTypes.UUID,
//   },
// });

User.hasMany(Bill, {
  foreignKey: "idUser",
});
// Bill.belongsTo(User);

Project.belongsToMany(User, { through: "UserProject" });
User.belongsToMany(Project, { through: "UserProject" });

export { User };
