'use strict';

// Declarando um array (vetor)
let osfoda = ["arana", "blakes", "gp da zl", "silvestre", "leo da 17", "mandrake", "petrus", "novin"];
console.log(osfoda);
// console.log(osfoda[0]);
//console.log(osfoda);
// Acessando um determinado elemento através do indice
console.log(osfoda[0]);
// O silvestre está em turne tocando taca fogo em kiksilver
console.log(`o ${osfoda[3]} está em turne tocando taca fogo em kiksilver`);

// relembrando como criar/usar arrays (vetor)
// no js, vc pode colocar qualquer coisa em um array
let seila = 6;
const coisas = [10, "senac", "<h2>oie</h2>", seila, 15.88];
console.log(coisas[1]);
console.log(coisas[4]);

// exercicios
// 1) Crie um array contendo um nome de 7 coisas que vc gosta. exemplo: artistas, musicas, livros, comida, etc...
let gostos = ['futebol', 'são paulo', 'brasil', 'libertadores', 'chelsea', 'champions league', 'real madrid']

// 2) mostre no consile uma frase personalizada indicando o segundo, o quinto e o setimo elemento do array. use concatenação e/ou template string

console.log("eu torço para o "+gostos[1]+" meu time da inglaterra é o "+gostos[4]+" e o meu time da espanha é o "+gostos[6]);

// array como matriz de 2 dimensoes
const tecnologias = [
    ["HTML", "CSS", "JAVASCRIPT"],
    ["FIGMA", "PHOTOSHOP"],
    ["PHP", "NODE.js", "SQL", "Express"]
]
console.log(tecnologias[0] [2]); //JavaScript
console.log(tecnologias[1] [0]); //Figma
console.log(tecnologias[2] [3]); //Express


