// Output should be like below
// {
//   25: [
//     { name: "Sunil", age: 25 },
//     { name: "Rahul", age: 25 }
//   ],
//   30: [
//     { name: "Amit", age: 30 }
//   ]
// }
const users = [
  { name: "Sunil", age: 25 },
  { name: "Amit", age: 30 },
  { name: "Rahul", age: 25 },
];

const res = Object.groupBy(users, (user) => user.age); // predefined fucntion

const getGroupedValues = (arr, key) => {
  const res = arr.reduce((acc, curr) => {
    const group = curr[key];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(curr);
    console.log(group);
    return acc;
  }, {});
  return res;
};

console.log(getGroupedValues(users, "age"));
