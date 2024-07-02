type User = {
  readonly _id: string; // just read, not able to be modified
  name: string;
  email: string;
  isActive: boolean;
  credCardNumber?: string; // <fieldName>?: <type> ~~ optional field
};

const createUser2 = (): User => {
  return {
    _id: `345`,
    name: "baca",
    email: "kkk@gmail.com",
    isActive: false,
    // no field credCardNumber but still ok <-- cuz optional field
  };
};

const user = createUser2();

// user._id = `kaka`;
// // Cannot assign to '_id' because it is a read-only property

// =========================================================

// array of objects
const allUser: User[] = [];
allUser.push(user);
console.log(allUser);

export {};
