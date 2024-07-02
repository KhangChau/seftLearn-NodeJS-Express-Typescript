const filterFunction = <T>(products: T[]): T => {
  const index = 3;
  return products[index];
};

const funcNo1 = <T, U>(val1: T, val2: U): (T | U)[] => {
  return [val1, val2];
};

interface CoordinateZ {
  xCor: number;
  yCor: number;
}

class CoCo implements CoordinateZ {
  xCor: number;
  yCor: number;
  constructor(xCor: number, yCor: number) {
    this.xCor = xCor;
    this.yCor = yCor;
  }
}

// if not let T extends the template coordinate, so inside the function
// we cannot access field xCor, yCor
const funcNo2 = <T extends CoordinateZ>(point: T) => {
  console.log(point.xCor);
};

funcNo2<CoCo>(new CoCo(12, 21));

// creating factory syntax
const create = <T>(c: { new (): T }): T => {
  return new c();
};
