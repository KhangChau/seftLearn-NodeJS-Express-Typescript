class Vehicle {
  // public numOfTire: number;

  constructor(
    public numOfTire: number,
    protected color: string,
    private skull: string
  ) {}
  public upgrade(): void {
    console.log("upgrading Vehicle!");
  }

  get getSkull(): string {
    return this.skull;
  }
  set setSkull(skull: string) {
    this.skull = skull;
  }
}

class Car extends Vehicle {
  // INHERITANCE
  public windowType: string = "za4";

  public upgrade(): void {
    this.color = "blue"; // ENCAPSULATION
    // this.skull = "hz113"; // ENCAPSULATION
    console.log("upgrading CAR!");
  }
}

class Bus extends Vehicle {
  // INHERITANCE
  public serviceNo: string = "hcmc";

  public upgrade(): void {
    this.color = "purple"; // ENCAPSULATION
    // this.skull = "hz113"; // ENCAPSULATION
    console.log("upgrading BUS!");
  }
}

// const vehicle = new Vehicle(4, 'red', '123xz');
// // console.log(vehicle.skull); // ENCAPSULATION

const vArray: Vehicle[] = [
  // POLYMORPHISM
  new Vehicle(2, "red", "65zz"),
  new Car(4, "red", "qcz1"),
  new Bus(8, "red", "0ffa"),
];

// console.log(vArray[1].upgrade());
vArray.forEach((v) => console.log(v.upgrade()));
// POLYMORHISM
// upgrading Vehicle!
// undefined
// upgrading CAR!
// undefined
// upgrading BUS!
// undefined
