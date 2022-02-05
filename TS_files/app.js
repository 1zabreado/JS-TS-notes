function add(n1, n2) {
    var res;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
}
var sum = add(20, 30);
console.log(sum);
var sumNames = add("George", " Ana");
console.log(sumNames);
