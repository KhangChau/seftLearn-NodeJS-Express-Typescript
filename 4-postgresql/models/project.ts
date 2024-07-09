import { Association, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";
import { User } from "./user";

class Project extends Model {
  declare status: boolean;
  declare name: string;
  //   declare static associations: {
  //     users: Association<Project, User>;
  //   };
}

Project.init(
  {
    status: { type: DataTypes.BOOLEAN },
    name: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "project" }
);

// Project.belongsToMany(User, { through: "UserProject" });
// User.belongsToMany(Project, { through: "UserProject" });

export { Project };
