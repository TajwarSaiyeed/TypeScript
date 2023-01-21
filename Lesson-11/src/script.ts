import { isPlayer } from "./interfaces/isPlayer.js";
import { Player } from "./classes/Player.js";

const mashrafi = new Player("Mashrafi", 25, "Bangladesh");

let sakib: isPlayer;

sakib = new Player("Sakib", 25, "Bangladesh");

const players: isPlayer[] = [];

players.push(sakib);
players.push(mashrafi);

// interfaces

interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;

  return {
    width,
    length,
  };
}

// twoDOptions
// drawRectangle({
//   width: 50,
//   length: 40,
// });

let threeDOptions = {
  width: 50,
  height: 20,
  length: 40,
};

const data = drawRectangle(threeDOptions);

console.log(data);
