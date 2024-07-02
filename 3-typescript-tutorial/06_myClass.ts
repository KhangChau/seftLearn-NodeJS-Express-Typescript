class User1 {
  //   name: string;
  //   email: string;
  //   readonly city: string = "zen";
  private rewardPoint: number = 0;

  constructor(
    public name: string,
    public readonly email: string,
    private city: string
  ) {}

  get getCity(): string {
    return this.city;
  }

  get RewardPoint(): number {
    return this.rewardPoint;
  }
  // set accessor cannot have return type!
  public set RewardPoint(point: number) {
    if (point < 0) {
      throw new Error("point should be greater than or equals to 0 ");
    }
    this.rewardPoint = point;
  }
}

const user = new User1("krillin", "krillin@dev.co", "zenkun");
// user.city = "23";

// console.log(user.getCity()); // this WRONG!!!
console.log(user.getCity); // get in class when called, goes WITHOUT '()'

// here is the syntax to access SET method
user.RewardPoint = 41;

console.log(user.RewardPoint);

console.log(user);
