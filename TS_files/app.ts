type Combinable = number | string;

function add(n1: Combinable, n2: Combinable) {
    let res;

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2;
    } else {
        res = n1.toString() + n2.toString();
    }

    return res;
}

const sum = add(20, 30);
console.log(sum);

const sumNames = add("George", " Ana");
console.log(sumNames);