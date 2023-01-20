"use strict";
// string
let playerName = "Tamim iqbal";
playerName = "34";
// change
let age = 35;
age = 25;
// declear
let playerName1;
playerName1 = "Sakib";
// function | explecitely number
function multiply(a, b) {
    return a * b;
}
// console.log(multiply(5, 3));
// array
let fruits = ["apple", "banana", "orange"];
fruits.push("mango");
// fruits.push(10); || Error
/**
 * Argument of type 'number' is not assignable to parameter of type 'string'.
 * fruits.push(10);
 */
// console.log(fruits);
// array any type
let fruits1 = [];
fruits1.push("apple");
fruits1.push(10);
// console.log(fruits1);
// mixed array
const mixed = ["apple", 34, true];
mixed.push("mango");
mixed.push(10);
mixed.push(false);
// error
// mixed.push({});
//  Argument of type '{}' is not assignable to parameter of type 'string | number | boolean'.
// console.log(mixed);
// object
let person = {
    name: "Mashrafi",
    age: 25,
    isCaptain: true,
};
// person.name = "Abid"; OK
// person.name = 10; | Error | Type 'number' is not assignable to type 'string'
// person = {}; | Error | Type '{}' is missing the following properties from type '{ name: string; age: number; isCaptain: boolean; }': name, age, isCaptain
// add new property
// person.country = "Bangladesh"; | Error | Property 'country' does not exist on type '{ name: string; age: number; isCaptain: boolean; }'
console.log(person);
