"use strict";
// access modifiers
class Player {
    /*
      private name: string; // no access and no change no modify
      private age: number; // no access and no change no modify
      readonly country: string; // access but not modify only read
  
      constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
      }
      
      */
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new Player("Mashrafi", 25, "Bangladesh");
const sakib = new Player("Sakib", 25, "Bangladesh");
const karim = new Player("Karim", 25, "Bangladesh");
const players = [];
players.push(sakib);
players.push(mashrafi);
players.push(karim);
