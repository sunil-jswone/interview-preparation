const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, current)=> {
  acc[current] = (acc[current] ||0) + 1;
  return acc;
}, {})

console.log(count);