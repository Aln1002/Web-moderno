class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()

const Pessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }

}

const p2 = criarPessoa('joao')
p2.falar()