"use strict";
// type aliases
const userDetails = (id, user) => {
    console.log(`User id is ${id}, \nname is : ${user.name} and \n age is : ${user.age}`);
};
const sayhello = (user) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
