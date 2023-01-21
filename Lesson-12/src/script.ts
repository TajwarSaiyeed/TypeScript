// GENERICS

// what is generics typescript
// generics is a way to create a component or a function that can work over a variety of types rather than a single one

// Now T is generic
const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "abid",
  id: 10,
  age: 20,
  country: "bangladesh",
});

// interface generics
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "Good",
  data: {
    name: "Test",
    something: 300,
  },
};
