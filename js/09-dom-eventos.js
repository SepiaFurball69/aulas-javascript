'use strict';

/* exemplo 01 */
// Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 = document.querySelector("#exemplo1");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

/*Sobre eventos:
um evento é um acontecimento ou fenomeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

o javascript suporta centenas de tipos de eventos. exemplos: clique do mouse, pressionar teclas, tocar na tela, rolagem da pagina, carregamento da pagina e etc. */
//exemplo detectando eventos
exemplo01.addEventListener("click", function () {
    mensagem01.textContent = "clica duas vezes em mim dnv pra vc ver!";
    // adiciona a calsse destaque (não coloque ponto nesse caso)
    mensagem01.classList.add("destaque");

});
//ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function () {
    mensagem01.textContent = "";
    //remove a classe destaque (não coloque ponto nesse caso)
    mensagem01.classList.remove("destaque");
});

/*Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página
2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.
3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão) */
const ev = document.querySelector("#ev");
ev.addEventListener("mouseover", function () {
    ev.textContent = "Praticanto eventos!";
    ev.classList.add("centro")
});
const ref = document.querySelector("#ref")
ref.addEventListener("click", function () {
    ev.textContent = "Eventos";
    ev.classList.remove("centro")
});
/*Exemplo 3: modo noturno*/
const botao = document.querySelector("#noturno")
botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno")
    if (pagina.classList.contains("modo-noturno")){
        botao.textContent = "Desativar"
    } else {
        botao.textContent = "Ativar"
    };
    
});
/* Desafios!
1) Faça a mudança de cores acontecer gradualmente (use o transition!)
2) se o modo noturno estiver ativado, ou seja, se a classe modo noturno estiver aplicada na pagina, faça o texto do botão mudar para "desativar", caso contratio, faça o teto do botão exibir "ativar"
*/
