function add(n1: number, n2: number, n3: boolean, phrase: string) {

    const res = n1 + n2;
    if (n3) {
        console.log(phrase + res);
    } else {
        return res;
    }
}

let num1: number;
num1 = 5;
const num2 = 2.5;

const printResult = true;
const resultComment = 'Result is: ';

add(num1, num2, printResult, resultComment)