'use strict'
// sobre funções: funções são blocos de codigo responsáveis por executar determinadas tarefas. para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada atraves do seu nome.

/*vantagens ao usar funções: 
-reutilização de código
-organização de codigo-fonte, permitindo a separação de diferentes lógicas e responsabilidades
-performance melhor
-maior facilidade para manutenções */

console.log("exemplo 1: função anonima");

const exemplo1 = function(){
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

function saudacao( nome ) {
    console.log("olá, "+nome);
}

saudacao("Henrique");
