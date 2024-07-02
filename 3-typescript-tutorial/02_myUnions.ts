import { Console } from "console";

let score: string | number;
score = 23;
score = "123";

type User = {
  name: string;
  id: string;
};
type Admin = {
  userName: string;
  id: string;
};

const user: User | Admin = {
  name: "boba",
  userName: "kaka",
  id: "123a",
};

const getDbId = (id: string | number): string | number => {
  // return 33; // return either string type or number type
  return "kakashi";
};

const getAnotherID = (id: string | number) => {
  if (typeof id == "string") {
    return id.toLocaleLowerCase();
  }
  if (typeof id == "number") {
    return id + 33;
  }
};

// ========================================================

const array1: number[] = [1, 2, 3];
const array2: string[] = ["1", "2", "3"];
// mixed
const array3: (number | string)[] = ["1", 2, 3];
console.log(array3);
// ========================================================
