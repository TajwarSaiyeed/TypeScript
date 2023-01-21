"use strict";
// GENERICS
// what is generics typescript
// generics is a way to create a component or a function that can work over a variety of types rather than a single one
// Now T is generic
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "abid",
    id: 10,
    age: 20,
    country: "bangladesh",
});
const response1 = {
    status: 200,
    type: "Good",
    data: {
        name: "Test",
        something: 300,
    },
};
