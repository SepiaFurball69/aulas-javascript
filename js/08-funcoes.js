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
function() {
    console.log("esta é a função nomeada!");
}
exemplo2();

