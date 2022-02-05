function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 10));
var combinedValues;
combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5;
console.log(combinedValues(8, 8));
// let someValue: undefined;
