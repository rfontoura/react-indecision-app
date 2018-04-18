'use strict';

var varNome = 'Rafael';
var varNome = 'Outra Pessoa'; // redefinição é permitida
console.log('varNome', varNome);

var letNome = 'Rafael';
//let letNome = 'Outro nome'; // não permitido
letNome = 'Outra Pessoa'; // só reatribuição é permitida
console.log('letNome', letNome);

var constNome = 'Rafael';
//const constNome = 'Outro nome'; // não permitido
// constNome = 'Outra Pessoa'; // não é permitida
console.log('constNome', constNome);

// ESCOPO
var valorTrue = true;
if (valorTrue) {
    var varTeste = 'Novo valor';
}
console.log(varTeste); // var encontrada

if (valorTrue) {
    var letTeste = 'Valor do let';
}
// console.log(letTeste); // erro!

var novoLet = void 0;
if (valorTrue) {
    novoLet = 'novo let'; // OK
}
console.log(novoLet); // ok