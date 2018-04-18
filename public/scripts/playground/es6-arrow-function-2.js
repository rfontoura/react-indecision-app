"use strict";

// challenge
// criar objeto - multiplier
// array numbers
// multiplyBy - single number
// 'multiply' method, returning new array with numbers multiplied
// after created, do console.log(multiplier.multiply()); // [1, 2, 3] 2 --> retorna [2, 4, 6]

var multiplier = {
    numbers: [3, 4, 5],
    multiplier: 2,
    multiplyBy: function multiplyBy() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplier;
        });
    }
};

console.log(multiplier.multiplyBy());