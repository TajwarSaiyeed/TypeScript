"use strict";
// explicitly string
let a;
a = "10";
// explicitly number
let b;
b = 10;
// normal variable string or number
let c;
c = 10;
c = "abid";
// string array
let stringArray = [];
stringArray = ["a", "b", "c"];
stringArray.push("10");
// console.log(stringArray);
// string or number array | union type
let stringOrNumberArray = [];
stringOrNumberArray = ["a", "b", "c", 50];
// stringOrNumberArray.push("10", 50, false); | Error | Argument of type 'boolean' is not assignable to parameter of type 'string | number'
stringOrNumberArray.push("10"); // Ok
stringOrNumberArray.shift(); // Ok
stringOrNumberArray.pop(); // Ok
stringOrNumberArray.unshift(10); // Ok
// object
let object1;
// object1 = 5; | Error | Type 'number' is not assignable to type 'object'.
// OK
object1 = {
    name: "abid",
    age: 25,
    address: {
        city: "Chittagong",
    },
};
// explicitly object
let object2;
// object2 = 5; | Error | Type 'number' is not assignable to type '{ name: string; age: number; address: object; }'.
// OK
object2 = {
    name: "abid",
    age: 25,
    address: {
        city: "Chittagong",
    },
};
object2.address = {
    city: "Chittagong",
    homeTown: "chittagong",
};
let object3;
object3 = [55, "array"];
