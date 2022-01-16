function makeClothing() {
    class Clothes {
        constructor (name) {
            this.name = name;
        }
    }

    return Clothes;
};

const Clothes = makeClothing();
const y = new Clothes("T-shirt");

console.log(y.name);