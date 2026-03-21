const greet = (name) => {
    return `Hello, ${name}!`;
}

const greetWithExclamation = (greetFunction, name) => {
    const greeting = greetFunction(name);
    return `${greeting}!!!`;
}

const result = greetWithExclamation(greet, 'Alice');
console.log(result); // Output: Hello, Alice!!!!

// Greet funtion is high order function because it takes another function as an argument (greetFunction) and returns a new function that modifies the behavior of the original greet function.