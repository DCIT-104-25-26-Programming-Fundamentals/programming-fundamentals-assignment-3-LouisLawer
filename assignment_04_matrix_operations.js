// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// ---------------------------------------------------------------------
// Helper — read a matrix row by row, each row space-separated
// ---------------------------------------------------------------------

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 1; i <= rows; i++) {
        const line = readlineSync.question(`Enter row ${i}: `);
        const row = line.split(" ").map(Number);
        matrix.push(row);
    }
    return matrix;
}

// ---------------------------------------------------------------------
// Helper — print a matrix in a neat, aligned grid
// ---------------------------------------------------------------------

function printMatrix(matrix) {
    for (const row of matrix) {
        console.log(row.map(val => String(val).padStart(4)).join(""));
    }
}

// ---------------------------------------------------------------------
// PART A — Transpose a Matrix
// ---------------------------------------------------------------------

function transposeMatrix(matrix, rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
        result.push([]);
        for (let i = 0; i < rows; i++) {
            result[j].push(matrix[i][j]);
        }
    }
    return result;
}

// ---------------------------------------------------------------------
// PART B — Add Two Matrices
// ---------------------------------------------------------------------

function addMatrices(a, b, rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < cols; j++) {
            result[i].push(a[i][j] + b[i][j]);
        }
    }
    return result;
}

// ---------------------------------------------------------------------
// PART C — Multiply Two Matrices
// ---------------------------------------------------------------------

function multiplyMatrices(a, rowsA, colsA, b, colsB) {
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result.push([]);
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i].push(sum);
        }
    }
    return result;
}

// ---------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------

function main() {
    // ---- PART A: Transpose ----
    console.log("===== PART A: Transpose a Matrix =====");
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    const matA = readMatrix(rows, cols);

    console.log("\nOriginal Matrix:");
    printMatrix(matA);

    const transposed = transposeMatrix(matA, rows, cols);

    console.log("\nTransposed Matrix:");
    printMatrix(transposed);

    // ---- PART B: Addition ----
    console.log("\n===== PART B: Add Two Matrices =====");
    const addRows = readlineSync.questionInt("Enter number of rows: ");
    const addCols = readlineSync.questionInt("Enter number of columns: ");

    console.log("\nEnter the first matrix:");
    const matB1 = readMatrix(addRows, addCols);

    console.log("\nEnter the second matrix:");
    const matB2 = readMatrix(addRows, addCols);

    const sumResult = addMatrices(matB1, matB2, addRows, addCols);

    console.log("\nSum of the two matrices:");
    printMatrix(sumResult);

    // ---- PART C: Multiplication ----
    console.log("\n===== PART C: Multiply Two Matrices =====");
    const rowsA = readlineSync.questionInt("Enter number of rows for Matrix A: ");
    const colsA = readlineSync.questionInt("Enter number of columns for Matrix A: ");
    const rowsB = readlineSync.questionInt("Enter number of rows for Matrix B: ");
    const colsB = readlineSync.questionInt("Enter number of columns for Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Error: number of columns in Matrix A must equal number of rows in Matrix B. Cannot multiply.");
        return;
    }

    console.log("\nEnter Matrix A:");
    const matC1 = readMatrix(rowsA, colsA);

    console.log("\nEnter Matrix B:");
    const matC2 = readMatrix(rowsB, colsB);

    const productResult = multiplyMatrices(matC1, rowsA, colsA, matC2, colsB);

    console.log("\nProduct of Matrix A x Matrix B:");
    printMatrix(productResult);
}

main();

