class Pessoa {
    constructor(nome = '(sem nome)', idade = 0) {
        this.nome = nome;
        this.idade = idade;
    }

    getSaudacao() {
        return `Olá, meu povo! Meu nome bobo é ${this.nome}!`;
    }

    getDescricao() {
        return `${this.nome} tem ${this.idade} ano(s).`;
    }
}

const eu = new Pessoa();
console.log(eu.getSaudacao());
console.log(eu.getDescricao());

const tiao = new Pessoa('Tião Galinha', 98);
console.log(tiao.getSaudacao());
console.log(tiao.getDescricao());