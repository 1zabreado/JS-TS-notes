"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 10));
let combinedValues;
combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;
console.log(combinedValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
