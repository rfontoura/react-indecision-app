// challenge
// criar objeto - multiplier
// array numbers
// multiplyBy - single number
// 'multiply' method, returning new array with numbers multiplied
// after created, do console.log(multiplier.multiply()); // [1, 2, 3] 2 --> retorna [2, 4, 6]

const multiplier = {
    numbers: [3, 4, 5],
    multiplier: 2,
    multiplyBy() {
        return this.numbers.map((number) => {
            return number * this.multiplier;
        })
    }
}

console.log(multiplier.multiplyBy());