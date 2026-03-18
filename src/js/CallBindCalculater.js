
const calculater = function(a, b) {
   return this.operation(a, b);
};

const add = {
  operation: function (a, b) {
    return a + b;
  },
};

const result =  calculater.call(add, 1, 2);


console.log(result);

