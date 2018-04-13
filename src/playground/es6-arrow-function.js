function quadrado(x) {
    return x * x;
}
console.log(quadrado(5));

// const quadradoArrow = (x) => {
//     return x * x;
// };

const quadradoArrow = (x) => x * x;
console.log(quadradoArrow(9));

// Challenge Time
function getPrimeiroNome(nomeCompleto) {
    return nomeCompleto.split(' ')[0];
}
console.log(getPrimeiroNome('José Silva'));

const getPrimeiroNomeArr = (nomeCompleto) => {
    return nomeCompleto.split(' ')[0];
}
console.log(getPrimeiroNomeArr('Um Cara Legal'));

const getPrimeiroNomeArrShort = (nomeCompleto) => nomeCompleto.split(' ')[0];
console.log(getPrimeiroNomeArrShort('Chaves do Oito'));