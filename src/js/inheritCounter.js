
// Using function and prototype:

// function Counter(intialValue=0) {
//     this.count = intialValue;
// }

// Counter.prototype.increment = function() {
//     this.count++;
//     console.log(this.count);
// }

// Counter.prototype.decrement = function() {
//     this.count--;
//     console.log(this.count);
// }


// Using class syntax:

class Counter {
    constructor(intialValue = 0) {
        this.count = intialValue;
    }
    increment() {
        this.count++;
        console.log(this.count);
    }
    decrement() {
        this.count--;
        console.log(this.count);
    }
}



const counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.decrement();