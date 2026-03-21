const add = (a) => {
  return (b) => {
    return a + b;
  };
};

const sum = add(2)(3);
console.log(sum);
//========================================================
const sumInfinite = (a) => {
  return (b) => {
    if (b !== undefined) {
      return sumInfinite(a + b);
    }
    return a;
  };
};
// Usage
console.log(sumInfinite(1)(2)(3)(4)(5)(6)()); // Output: 21
