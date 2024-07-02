const user = { name: "khang", id: 123 };

type User = {
  name: string;
  id: number;
};

// const createUser2 = (): { name: string; id: number } => {
//   return { name: "baca", id: 345 };
// };
const createUser2 = (): User => {
  return { name: "baca", id: 345 };
  //   return { name: "baca", id: 345, gmail: 'hana' };
  // // Unreachable code detected
  // // Object literal may only specify known properties,
  // // and 'gmail' does not exist in type 'User'
};

// type created by union of the other types
type Walking = {
  walking: string;
};

type Running = {
  running?: string;
};

type Human = Walking &
  Running & {
    jumping: String;
  };

const createHuman = (): Human => {
  return {
    walking: "slow",
    running: "fast",
    jumping: "high",
  };
};

export {};
