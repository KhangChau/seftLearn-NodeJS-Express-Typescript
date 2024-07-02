abstract class Vehicle {
  // public numOfTire: number;
  constructor(
    public numOfTire: number,
    protected color: string,
    private skull: string
  ) {}

  public abstract upgrade(): void;

  // u can def&imp some functions in abstract class
  // -> the instance of the derrived class can use these functions
  public doSomething(): void {
    console.log("do something!");
  }
}

class Car extends Vehicle {
  public windowType: string;

  constructor(
    numOfTire: number,
    color: string,
    skull: string,
    windowType: string
  ) {
    super(numOfTire, color, skull);
    this.windowType = windowType;
  }

  //   Non-abstract class 'Car' does not implement
  //   inherited abstract member 'upgrade' from class 'Vehicle'
  // similiar with the function declared in interface
  // -> class implements that interface should implement the function
  public upgrade(): void {
    this.color = "blue";

    console.log("upgrading CAR!");
  }
}

// // CANNOT create an instance of an abstract class.
// const abstractInstance = new Vehicle(16, "test", "test");

const car = new Car(21, "test", "test", "test");
car.doSomething();
