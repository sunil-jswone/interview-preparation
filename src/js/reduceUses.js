// find Maximum Uses of a variable in a function
const nums = [43, 56, 23, 89, 88, 90, 99, 652, 21, 43];

const max = Math.max.apply(null, nums);

const maxInSecondWay = Math.max(...nums);

console.log(max, maxInSecondWay);

const findMax = (numbers) => {
  const max = numbers.reduce((max, current) => {
    return current > max ? current : max;
  });
  return max;
};

console.log(findMax(nums));
// ==========================================================
// Convert array of objects to array of names
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = users.reduce((results, user) => {
  results[user.id] = user.name;
  return results;
}, {});

console.log(names); // Output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }
// =========================================

// find occurance of name in an array

const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "grape",
  "banana",
  "apple",
];
const result = fruits.reduce((fruitResult, fruit) => {
  fruitResult[fruit] = (fruitResult[fruit] || 0) + 1;
  return fruitResult;
}, {});

console.log(result);