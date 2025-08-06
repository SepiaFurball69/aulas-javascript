'use strict';

// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    // propriedades: valor
    n: "chaves",
    idade: 8,
    cidade: "são paulo",
    estado: "sp"
};

console.log(pessoa);

// Acessamos as propriedades usando NomeDoObjeto.NomeDaPropriedade
console.log(`0 ${pessoa.nome} tem ${pessoa.idade} anos.`);



// exemplo 2: objeto com array
console.log("\nExemplo2\n");

const livro = {
    titulo: "Harry Potter",
    autor: "J.K.Rowling",
    volumes: [
        "A Pedra filosofal",
        "A camara Secreta",
        "O Prizioneiro de Azkabam",
        "O Calice de Fogo",
        "Ordem da Fenix",
        "Enigma do Principe",
        "Reliquias da Morte",
    ]
}
console.log(livro);
console.log(livro.titulo);

// Para acessaralgum dos volumes, primeiro passamos pela prorpiedade (volumes) usando 'ponto' e, chegando nela, usamos os 'colchetes' com indice pois se trata de um array.
console.log(`Meu livro preferido é ${livro.volumes[3]}`);

//Exemplo 3: array com objetos
console.log("\nExemplo3\n");
const livros = [
    {
        titulo: "o assassinato no expresso do oriente",
        autor: "agatha christie"
    },
    {
        titulo: "crepusculo",
        autor: "Stephanie myers"
    },
    {
        titulo: "bla",
        autor: "bin"
    }
]
console.log(livros);
console.log(livros[2].titulo);

/* exercicios
1. Crie um objeto chamado 'aluno' contendo os seguintes dados:
-nome completo
-data de nascimento
-(use array) lista de telefones (fixo e celular)
-(desafio: use um objeto nesta propriedade) endereço contendo separadamente: rua, numero, bairro.
2. mostre no console o nome do aluno, o telefone celular e o bairro em que mora.
*/
const aluno = {

    nome: "Henrique de Sousa Freitas",
    data: "03/09/2003",
    contato: [
        "11972727890",
        "40028922"
    ],
    endereco: {
        rua: "paulo vicente",
        numero: 400,
        bairro: "Vila Carolina"
    }
};
console.log(`O Aluno se chama ${aluno.nome} o numero de celular dele é ${aluno.contato[0]} e ele mora no bairro ${aluno.endereco.bairro}`);




