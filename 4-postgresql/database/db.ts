import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import { User } from "../models/user";
// import { User } from "./User";

// DATABASE CONNECTION
export const sequelize = new Sequelize(
  // "postgres://<username>:<password>@localhost:<port (default:5432)>/<PostgreDatabase>",
  "postgres://postgres:KhangChauPostgresql@localhost:5432/personal",
  {
    dialect: "postgres",
    // LOGGING
    // Choose one of the logging options
    //   logging: console.log, // Default, displays the first parameter of the log function call
    //   logging: (...msg) => console.log(msg), // Displays all log function call parameters
    //logging: (msg) => logger.debug(msg), // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
    //logging: logger.debug.bind(logger), // Alternative way to use custom logger, displays all messages
    logging: false, // Disables logging
  }
);

//// TEST DATABASE CONNECTION
// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
