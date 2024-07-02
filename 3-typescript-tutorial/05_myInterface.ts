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

interface EyeLazerAttack {
  eyeLazerAttack(): void;
}

interface Hero extends Human, EyeLazerAttack {
  flying(speed: number, height: number): string;
}

const flyingFunction = (spd: number, hght: number): string => {
  return `to be flying at height ${hght} with speed at ${spd}`;
};

// // 'Hero' only refers to a type, but is being used as a value here.
// const hero = new Hero();
// console.log(hero.name);

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
  eyeLazerAttack: () => {
    console.log("eye lazer attack!!!");
  },
};
const msgFLying: string = krilin.flying(13.4, 5);
console.log(msgFLying);
