// function signatures

let myFunc: (x: string, y: string) => void;

// add
let add: (x: number, y: number) => number;

// subtract
let subtract: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

subtract = (a: number, b: number) => {
  return a - b;
};

// calculate function
let calculate: (a: number, b: number, c: string) => number;

calculate = (a: number, b: number, c: string) => {
  if (c === "+") {
    return a + b;
  } else {
    return a - b;
  }
};

// console.log(calculate(9, 6, "-"));

let userDetails: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => string;

userDetails = (
  id: number | string,
  user: {
    name: string;
    age: number;
  }
) => {
  return `User id is : ${id} \nName: ${user.name} \nAge: ${user.age}`;
};

// console.log(userDetails(10, { name: "abid", age: 25 }));
