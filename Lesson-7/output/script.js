"use strict";
// function signatures
let myFunc;
// add
let add;
// subtract
let subtract;
add = (a, b) => {
    return a + b;
};
subtract = (a, b) => {
    return a - b;
};
// calculate function
let calculate;
calculate = (a, b, c) => {
    if (c === "+") {
        return a + b;
    }
    else {
        return a - b;
    }
};
// console.log(calculate(9, 6, "-"));
let userDetails;
userDetails = (id, user) => {
    return `User id is : ${id} \nName: ${user.name} \nAge: ${user.age}`;
};
// console.log(userDetails(10, { name: "abid", age: 25 }));
