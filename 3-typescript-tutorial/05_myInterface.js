var flyingFunction = function (spd, hght) {
    return "to be flying at height ".concat(hght, " with speed at ").concat(spd);
};
var hero = new Hero();
console.log(hero.name);
var krilin = {
    _id: "aba1234",
    name: "krilin",
    credCardId: "25cbc91z",
    walking: function () {
        console.log("to be walking");
    },
    eating: function (junkFood) {
        return "to be eating ".concat(junkFood);
    },
    gmail: "krilin@gmail.com",
    flying: flyingFunction,
    eyeLazerAttack: function () {
        console.log("eye lazer attack!!!");
    },
};
var msgFLying = krilin.flying(13.4, 5);
console.log(msgFLying);
