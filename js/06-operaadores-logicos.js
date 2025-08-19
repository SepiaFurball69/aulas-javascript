'use strict'

/* operadores logicos
&& -> E       -> and
||  -> ou     -> or
! -> não/negação    -> not */

// && -> retorna TRUE se TODAS as condições fotem VERDADEIRAS
console.log("exemplo &&");
let idade = 20
let temcarta = true;
if (idade >=18 && temcarta== true) {
    console.log("pode dirigir");
    else{
        console.log(não pode dirigir);
    }
}

/* sobre duplo e triplo sinal de igual - ao usar == a comparação é somente do VALOR, ou seja, NÃO IMPORTA o tipo de dados (string, number, etc.)

- ao usar === a comparação é do VALOR E DO TIPO DE DADO, ou seja, IMPORTA TUDO*/
let a = 10;
let b = '10';
//let resultadoComparacao = a == b; // TRUE
let resultadoComparacao = a == b; //false

console.log(resultadoComparacao);

// == olha valor
// === olha valor e tipo de dado

let feriado = true;
let fimdesemana = false;
let diadasemana = "quinta"
if (feriado === true || fim de semana === true || diadasemana === "sexta") {
    console.log("não tem aula");
}
else{
    console.log("tem aula");
}