class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: 'magia',
            guerreiro: 'espada',
            monge: 'artes marciais',
            ninja: 'shuriken'
        };
        const ataque = ataques[this.tipo] || 'ataque desconhecido';
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Gandalf', 300, 'mago');
heroi1.atacar(); 

const heroi2 = new Heroi('Conan', 30, 'guerreiro');
heroi2.atacar(); 

const heroi3 = new Heroi('Aang', 25, 'monge');
heroi3.atacar(); 

const heroi4 = new Heroi('Naruto', 16, 'ninja');
heroi4.atacar();
