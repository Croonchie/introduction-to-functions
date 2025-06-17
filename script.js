// Part 1: Declaring and Invoking Functions

// Step 1: Declare greet function
function greet(name) {
    return `Hello, ${name}!`;
}

// Step 2: Invoke the greet function
console.log(greet("Joshua")); // Example name


// Part 2: Working with Parameters and Returning Values

// Step 3: Create addNumbers function
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 7)); // Expected output: 12


// Part 3: Function Scope

// Step 4: Local and Global Scope
let x = 10; // Global variable

console.log("Global x before function:", x);

function changeValue() {
    let x = 20; // Local variable with same name
    console.log("Local x inside function:", x);
}

changeValue();

console.log("Global x after function:", x);


// Part 4: Closures

// Step 5: Create a closure
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log(`Count is now: ${count}`);
    }
}

const counter = outerFunction();

counter(); // Count is now: 1
counter(); // Count is now: 2
counter(); // Count is now: 3
