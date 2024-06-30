// console.log(`Hello Wolrd!`);
// interface Hero {
//   color: string;
//   weapon: string;
// }

// const batman: Hero = { color: "black", weapon: "batarang" };
// console.log(batman.weapon);
// // ================================================================

// // NUMBER not specific int, float
// const customerId: number = 21;
// console.log(`the input number is: ${customerId}`);
// ================================================================

// // function
// function addTwo(input: number): number {
//   return input + 2;
// }
// console.log(addTwo(4));

// const addTwo_v2 = (input: number): number => {
//   return input + 2;
// };
// console.log(addTwo_v2(4));

// const heros = ["spidey", "batman", "sentai"];
// const xHeros = heros.map((hero: string) => {
//   console.log(`this is hero ${hero}`);
//   return hero + "X";
// });
// console.log(xHeros);

// type void -> function return nothing
// type never -> func throw exception or terminate execution of program
// handle exceptions

const consoleError = (errMsg: string): void => {
  console.log(errMsg);
};
const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// ================================================================

export {};
