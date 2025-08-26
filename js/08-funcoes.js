'use strict'
// sobre funções: funções são blocos de codigo responsáveis por executar determinadas tarefas. para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada atraves do seu nome.

/*vantagens ao usar funções: 
-reutilização de código
-organização de codigo-fonte, permitindo a separação de diferentes lógicas e responsabilidades
-performance melhor
-maior facilidade para manutenções */

console.log("exemplo 1: função anonima");

const exemplo1 = function () {
    //corpo da função: ação que a função vai fazer
    console.log("olá função anonima");
};
//chamando/invocando a função
exemplo1();

console.log("\nExemplo 2: função Nomeada/Declarada");
function exemplo2() {
    console.log("esta é a função nomeada!");
}
exemplo2();

console.log("\nExemplo 3: arrow function (função flecha/seta)");

const exemplo3 = () => {
    console.log("Sintaxe Arrow Function!");
};

exemplo3();

/* Obs: funções (em qualquer sintaxe) tambem podem trabalhar com parametros/argumentos 

quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados atraves de parametros/argumentos entre os parenteses

geralmente, ao terminar o processamento de dados, a função "retorna" para fora do resultado.*/
console.log("\nExemplo 4: função com parametro");

function saudacao(nome = "Visitante") {
    console.log("olá, " + nome);
}

saudacao("Henrique");
saudacao(); //nesse caso, é usado "visitante" como valor

console.log("\nExemplo 5: função com parametros e retorno");

function multiplicar(valor1, valor2) {
    return valor1 * valor2
};

let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

console.log("resultado1: " + resultado1);
console.log("resultado2: " + resultado2);

console.log("\nExemplo 6: simplificando com Arrow function");

//versão 1: Sintaxe declarada/nomeada
/* function somar(valor1, valor2){
    return valor1 + valor2;
}; */
//versão 2: sintaxe Arrow function
const somar = (valor1, valor2) => valor1 + valor2;
console.log(somar(150, 500));

let preco = 5000;
let desconto = preco * 0.10; //10%
let precofinal = preco - desconto;

function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

console.log("preco original: " + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("preço final: " + formatarMoeda(precofinal));

// Exemplo: usando recursos de classe Intl (Internacionalização)
const exemplo = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(preco);

console.log(exemplo);

const exemploB = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(desconto);

console.log(exemploB);

const exemploC = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
}).format(precofinal);

console.log(exemploC);

