interface Human {
  readonly _id: string | number;
  name: string;
  credCardId?: string;
  walking(): void;
  eating(food: string): string;
}

interface Human {
  gmail?: string;
}

interface Hero extends Human {
  flying(speed: number, height: number): string;
}

const flyingFunction = (spd: number, hght: number): string => {
  return `to be flying at height ${hght} with speed at ${spd}`;
};

const krilin: Hero = {
  _id: "aba1234",
  name: "krilin",
  credCardId: "25cbc91z",
  walking: () => {
    console.log(`to be walking`);
  },
  eating: (junkFood: string) => {
    return `to be eating ${junkFood}`;
  },
  gmail: "krilin@gmail.com",
  flying: flyingFunction,
};
const msgFLying: string = krilin.flying(13.4, 5);
console.log(msgFLying);
