var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // public numOfTire: number;
    function Vehicle(numOfTire, color, skull) {
        this.numOfTire = numOfTire;
        this.color = color;
        this.skull = skull;
    }
    // u can def&imp some functions in abstract class
    // -> the instance of the derrived class can use these functions
    Vehicle.prototype.doSomething = function () {
        console.log("do something!");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(numOfTire, color, skull, windowType) {
        var _this = _super.call(this, numOfTire, color, skull) || this;
        _this.windowType = windowType;
        return _this;
    }
    //   Non-abstract class 'Car' does not implement
    //   inherited abstract member 'upgrade' from class 'Vehicle'
    // similiar with the function declared in interface
    // -> class implements that interface should implement the function
    Car.prototype.upgrade = function () {
        this.color = "blue";
        console.log("upgrading CAR!");
    };
    return Car;
}(Vehicle));
// // CANNOT create an instance of an abstract class.
// const abstractInstance = new Vehicle(16, "test", "test");
var car = new Car(21, "test", "test", "test");
car.doSomething();
