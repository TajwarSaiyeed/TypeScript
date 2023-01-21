import { isPlayer } from "./../interfaces/isPlayer.js";

export class Player implements isPlayer {
  constructor(
    public name: string,
    private age: number,
    public country: string
  ) {}

  getAge() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
