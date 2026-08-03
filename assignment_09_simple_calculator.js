// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

// ---------------------------------------------------------------------
// Operation functions
// ---------------------------------------------------------------------

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

function exponentiate(a, b) {
    return a ** b;
}

// ---------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------

function main() {
    while (true) {
        console.log();
        console.log("=========================");
        console.log("     SIMPLE CALCULATOR");
        console.log("=========================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");

        const choice = readlineSync.questionInt("Select an operation (1-7): ");
        console.log();

        if (choice === 7) {
            console.log("Goodbye!");
            break;
        }

        if (choice < 1 || choice > 6) {
            console.log("Error: please enter a number from 1 to 7.");
            continue;
        }

        const a = readlineSync.questionFloat("Enter first number : ");
        const b = readlineSync.questionFloat("Enter second number: ");

        if (choice === 1) {
            console.log(`Result: ${a} + ${b} = ${add(a, b)}`);
        } else if (choice === 2) {
            console.log(`Result: ${a} - ${b} = ${subtract(a, b)}`);
        } else if (choice === 3) {
            console.log(`Result: ${a} * ${b} = ${multiply(a, b)}`);
        } else if (choice === 4) {
            const result = divide(a, b);
            if (result === null) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log(`Result: ${a} / ${b} = ${result.toFixed(2)}`);
            }
        } else if (choice === 5) {
            const result = modulus(a, b);
            if (result === null) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log(`Result: ${a} % ${b} = ${result}  (remainder)`);
            }
        } else if (choice === 6) {
            console.log(`Result: ${a} ** ${b} = ${exponentiate(a, b)}`);
        }
    }
}

main();
