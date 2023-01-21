import { Player } from "./classes/Player.js";
const mashrafi = new Player("Mashrafi", 25, "Bangladesh");
let sakib;
sakib = new Player("Sakib", 25, "Bangladesh");
const players = [];
players.push(sakib);
players.push(mashrafi);
function drawRectangle(options) {
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
