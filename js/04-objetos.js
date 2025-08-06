'use strict';

// Exemplo 1: objeto com dados de uma pessoa
const pessoa = {
    // propriedades: valor
    nome: "chaves",
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

