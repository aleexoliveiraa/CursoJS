const pessoa1 = {
    nome: 'Alex',
    sobrenome: 'Oliveira',
    idade: 29,

    exibir() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.exibir();
pessoa1.incrementaIdade();
pessoa1.exibir();
pessoa1.incrementaIdade();
pessoa1.exibir();
pessoa1.incrementaIdade();
pessoa1.exibir();
pessoa1.incrementaIdade();
pessoa1.exibir();
pessoa1.incrementaIdade();


/* function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa('Alex', 'Oliveira', 29);
const pessoa2 = criarPessoa('Maria', 'Jacinta', 55);

console.log(pessoa1.nome, pessoa2.nome);*/

/*const pessoa1 = {
    nome: 'Alex',
    sobrenome: 'Oliveira',
    idade: 29
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);*/