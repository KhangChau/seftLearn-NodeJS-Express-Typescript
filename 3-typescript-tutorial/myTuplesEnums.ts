let tuple: [number, boolean, string];

tuple = [1.8, true, "kaka"];
tuple = [13, true, "kaka"];
// tuple = [ true, 13, "kaka"]; // WRONG <- can not change the position of ele in tupple
tuple[0] = 99;

tuple.push(33); // it's OK CUZ tuple with keyword 'let'
console.log(tuple);
// =================================================

type User = [string | number, string];
const user: User = [123, "nam"];
user[0] = 234;
console.log(user);

// user.push(false); // it's illegal with variable start with keyword 'const'
