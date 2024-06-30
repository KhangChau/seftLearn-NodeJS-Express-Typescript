"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser2 = function () {
    return {
        _id: "345",
        name: "baca",
        email: "kkk@gmail.com",
        isActive: false,
        // no field credCardNumber but still ok <-- cuz optional field
    };
};
var user = createUser2();
// user._id = `kaka`;
// // Cannot assign to '_id' because it is a read-only property
// =========================================================
// array of objects
var allUser = [];
allUser.push(user);
console.log(allUser);
