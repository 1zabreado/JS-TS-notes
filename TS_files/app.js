function add(n1, n2, n3, phrase) {
    var res = n1 + n2;
    if (n3) {
        console.log(phrase + res);
    }
    else {
        return res;
    }
}
var num1 = 5;
var num2 = 2.5;
var printResult = true;
var resultComment = 'Result is: ';
add(num1, num2, printResult, resultComment);
