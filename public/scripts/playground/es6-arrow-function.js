'use strict';

function quadrado(x) {
    return x * x;
}
console.log(quadrado(5));

// const quadradoArrow = (x) => {
//     return x * x;
// };

var quadradoArrow = function quadradoArrow(x) {
    return x * x;
};
console.log(quadradoArrow(9));

// Challenge Time
function getPrimeiroNome(nomeCompleto) {
    return nomeCompleto.split(' ')[0];
}
console.log(getPrimeiroNome('José Silva'));

var getPrimeiroNomeArr = function getPrimeiroNomeArr(nomeCompleto) {
    return nomeCompleto.split(' ')[0];
};
console.log(getPrimeiroNomeArr('Um Cara Legal'));

var getPrimeiroNomeArrShort = function getPrimeiroNomeArrShort(nomeCompleto) {
    return nomeCompleto.split(' ')[0];
};
console.log(getPrimeiroNomeArrShort('Chaves do Oito'));