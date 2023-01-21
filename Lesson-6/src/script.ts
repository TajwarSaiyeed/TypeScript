// type aliases

type stringOrNumber = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(
    `User id is ${id}, \nname is : ${user.name} and \n age is : ${user.age}`
  );
};

const sayhello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "sir" : "Mr."} ${user.name}`);
};
