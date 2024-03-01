export const functionDemo = () => {
    // normal functions
    console.log(addNums(4, 5));
    // using default value
    console.log(addNums());

    // as arrow function
    console.log(sum());
    console.log(sum(10,10));

    console.log(numToHalve(11));
}

function addNums(num1 = 0, num2 = 0) { // default values
    return num1 + num2;
}

/* const sum = (num1 = 0, num2 = 0) => {
    return num1 + num2;
}; */

// single instruction the best way
const sum = (num1 = 0, num2 = 0) => num1 + num2; // dont need the return key word

const numToHalve = num => num / 2; // dont need parentesis
