const user = { name: "khang", id: 123 };
// ==================================================

// const createUser1 = ({ name: string, id: number }) => {};
// createUser1({ name: "bobo", id: 222 });

// // but how about...
// createUser1({ name: "bobo", id: 222, gmail: "bobo@gmail.com" });
// // Object literal may only specify known properties,
// // and 'gmail' does not exist in type '{ name: any; id: any; }'

// // SOLUTION --> SHOW THE BAD BEHAVIOUR OF OBJECT
// const aUser = { name: "bobo", id: 222, gmail: "bobo@gmail.com" };
// createUser1(aUser);
// ==================================================

const createUser2 = (): { name: string; id: number } => {
  return { name: "baca", id: 345 };
};

export {};
