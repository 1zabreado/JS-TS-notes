"use strict";
function add(n1, n2, n3, phrase) {
    const res = n1 + n2;
    if (n3) {
        console.log(phrase + res);
    }
    else {
        return res;
    }
}
let num1;
num1 = 5;
const num2 = 2.5;
const printResult = true;
const resultComment = 'Result is: ';
add(num1, num2, printResult, resultComment);
