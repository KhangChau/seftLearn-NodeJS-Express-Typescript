// =======================================================================================
//   [CREATE]

import { Optional } from "sequelize";
import { User } from "../models/user";
import { sequelize } from "../database/db";

// // MODULE BASIC INFO:
// //   no1: set->save
// const hayasa = User.build({ name: `hayasa` }); // favColor <- set default = green following defined model
// await hayasa.save();

//   // no2:
//   const param: Optional<any, string> = { name: "kadu", cash: 35000, age: 29 }; // default val of favColor is assigned to 'green'
//   const jane = await User.create(param); // now we actually have instance of jane and could play around with it.

// //   Jane exists in the database now!
//   console.log(jane instanceof User); // true
//   console.log(jane.name); // "Jane"

//   console.log(jane); // not gud cuz the instance comes with many fiels
//   console.log(jane.toJSON()); // this is ok
// =======================================================================================
// // [reload instance from database]
// jane.reload(); // reload if you need!
// =======================================================================================
// [UPDATE]
// // no1:
// hayasa.age = 30; // it was null before
// await hayasa.save(); // NOTE: await

// // no2: set->save
// hayasa.age = 31; // it was 30 before
// hayasa.cash = 450000; // it was null before
// await hayasa.reload(); // but in database hasn't updated yet
// console.log(`before save`, hayasa.toJSON()); // {age: 30, cash: null}

// hayasa.age = 31; // it was 30 before
// hayasa.cash = 450000; // it was null before
// await hayasa.save();
// console.log(`after save`, hayasa.toJSON()); // {age: 31, cash: 450000};

// // no2 (alternative): set->save
// hayasa.set({ age: 22, cash: 450001 });
// await hayasa.reload();
// console.log(`before save `, hayasa.toJSON());

// hayasa.set({ age: 22, cash: 450001 });
// await hayasa.save();
// console.log(`after save `, hayasa.toJSON());

// // no3: update directly to database
// await hayasa.update({ age: 32, cash: 500000 });
// console.log(`no3.after save `, hayasa.toJSON());

// // no4: set->save ONLY SOME FIELD(S)
// hayasa.name = `hayasa-Update`; // it was hayasa before
// hayasa.age = 33; // it was 32 -> but won't be updated!
// await hayasa.save({ fields: [`name`] });
// await hayasa.reload();
// console.log("no4: ", hayasa.toJSON()); // {name: hayasa-Update, age: <not update>}
// =======================================================================================
// [DELETE]
// hayasa.destroy();
// =======================================================================================

export const userPlayAround = async (): Promise<void> => {
  // CREATE INSTANCE
  const hayasa = await User.create({ name: `hayasa`, age: 32 }); // favColor <- set default = green following defined model

  // UPDATE INSTANCE
  console.log("init hayasa: ", hayasa.toJSON());
  hayasa.name = `hayasa-Update`; // it was hayasa before
  hayasa.age = 33; // it was 32 -> but won't be updated!

  await hayasa.save({ fields: [`name`] });
  await hayasa.reload();
  console.log("update hayasa: ", hayasa.toJSON()); // {name: hayasa-Update, age: <not update>}

  // // DELETE INSTANCE
  // try {
  //   await hayasa.destroy();
  //   console.log("instance has been already deleted!");
  // } catch (error) {
  //   console.log(error);
  // }

  // CLOSE CONNECTION
  await sequelize.close();
};
