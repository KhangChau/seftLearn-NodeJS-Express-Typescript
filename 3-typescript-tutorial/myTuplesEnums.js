var tuple;
tuple = [1.8, true, "kaka"];
tuple = [13, true, "kaka"];
// tuple = [ true, 13, "kaka"]; // WRONG <- can not change the position of ele in tupple
tuple[0] = 99;
tuple.push(33);
console.log(tuple);
var user = [123, "nam"];
user[0] = 234;
console.log(user);
// user.push(false);
