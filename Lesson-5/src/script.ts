// function type

const myFunction: Function = (a: string, b: string, c: string = ""): string => {
  console.log(`hello ${a} ${b} ${c}`);

  return a + b;
};

myFunction("Abid", "Welcome", "hello");

let myFunc: Function;

myFunc = () => {
  console.log("Hello World 1");
};
