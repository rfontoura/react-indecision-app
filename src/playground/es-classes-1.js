class Pessoa {
    constructor(nome = 'Anônimo', idade = 0) {
        this.nome = nome;
        this.idade = idade;
    }

    getSaudacao() {
        return `Olá, meu povo! Meu nome bobo é ${this.nome} e tenho ${this.idade} anos!`;
    }

    getDescricao() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} ano(s).`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    possuiCurso() {
        return !!this.curso;
    }

    getDescricao() {
        let descricao = super.getDescricao();
        if (this.possuiCurso()) {
            descricao += ` Faço o curso ${this.curso}.`
        }

        return descricao;
    }
}

class Viajante extends Pessoa {
    constructor(nome, idade, cidadeNatal) {
        super(nome, idade);
        this.cidadeNatal = cidadeNatal;
    }

    getSaudacao() {
        let saudacao = super.getSaudacao();
        if (this.cidadeNatal) {
            saudacao += ` Falo de ${this.cidadeNatal}.`;
        }
        return saudacao;
    }
}

const eu = new Viajante();
console.log(eu.getSaudacao());

const tiao = new Viajante('Jaiminho, o Carteiro', 55, 'Tangamandápio');
console.log(tiao.getSaudacao());