'use strict';
console.log("teste");

let numero = 11;

console.log("Exemplo 1");
if (numero >= 10) {
    console.log("Se voce está vendo essa mensagem é porque a condição é verdadeira");
}

console.log("\nExemplo2");

let aluno = "blakes";
let idade = 16;
/*Logica, verificar se o aluno é maior ou menor de idade.*/
if (idade < 18 ) {
    console.log("o aluno é menor de idade");    
}
else{
    console.log("o aluno é maior de idade");
}
/* FAÇA O EXERCICIO AQUI
1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado".*/
let nota1 = 4
let nota2 = 10
let media = (nota1+nota2)/2
console.log(media);
if (media >= 7) {
    console.log("o aluno foi aprovado");    
}
else{
    console.log("o aluno foi reprovado");
}
/* condicional encadeada ou sucessiva:
Verificando o desempenho do aluno conforme a media:
- media acima de 9: otimo
- media acima de 7: bom
- media acima de 5: ruim
- media até 5: pessimo*/
if (media > 9) {
    console.log("otimo");
}
else if (media > 7) {
    console.log("bom");
}
else if (media > 5) {
    console.log("ruim");
}
else{
    console.log("pessimo");
}