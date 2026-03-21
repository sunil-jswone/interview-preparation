const arrData = [1, [2, 3, [4, 5], 1, [7, 9]]];

// output  [1,2,3,4,5,1,7,9]

// Method 1 using flat
// const res = arrData.flat(Infinity);

//Method 2 using reduce method
// const flatternArray = (arr) => {
//   const res = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       return acc.concat(flatternArray(item));
//     }
//     return acc.concat(item);
//   }, []);
//   return res;
// };

// const using recusrion

const flatternArray = (arr) => {
  let res = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatternArray(item));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flatternArray(arrData));
