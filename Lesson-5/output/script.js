"use strict";
// function type
const myFunction = (a, b, c = "") => {
    console.log(`hello ${a} ${b} ${c}`);
    return a + b;
};
myFunction("Abid", "Welcome", "hello");
let myFunc;
myFunc = () => {
    console.log("Hello World 1");
};
