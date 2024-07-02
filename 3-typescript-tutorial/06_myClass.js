var User1 = /** @class */ (function () {
    function User1(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
        //   name: string;
        //   email: string;
        //   readonly city: string = "zen";
        this.rewardPoint = 0;
    }
    Object.defineProperty(User1.prototype, "getCity", {
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "RewardPoint", {
        get: function () {
            return this.rewardPoint;
        },
        // set accessor cannot have return type!
        set: function (point) {
            if (point < 0) {
                throw new Error("point should be greater than or equals to 0 ");
            }
            this.rewardPoint = point;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
var user = new User1("krillin", "krillin@dev.co", "zenkun");
// user.city = "23";
// console.log(user.getCity()); // this WRONG!!!
console.log(user.getCity); // get in class when called, goes WITHOUT '()'
// here is the syntax to access SET method
user.RewardPoint = 41;
console.log(user.RewardPoint);
console.log(user);
