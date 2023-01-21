class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const mashrafi = new Player("Mashrafi", 25, "Bangladesh");
const sakib = new Player("Sakib", 25, "Bangladesh");

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);
