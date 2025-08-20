'use strict'

/* Loops ou estruturas de repetição
são comandos que, baseados em alguma condição logica, são programados para executar ações repetidas vezes.
comandos masi tradicionais: while (enquanto) e for (para)

normalment, os loops são controlados atravez de uma variavel contadora. esta variavel é comumente chamada de "i", "j", "k" ou qualquer outra letra se necessario
*/

console.log("exemplo 1: WHILE (enquanto)");

let i = 1;
while(i <= 5 ){
    console.log("valor do contador: "+i);
    i++; // incremento
    // i = i + 1
}
console.log("\nExemplo 2: For(para)");
for( let j = 1; j <= 10; j++ ){
    console.log(" J vale "+j);

}
console.log("\nExemplo 3: loop regressivo");

for(let k = 10; k > 1; k-- ){
    console.log("K vale "+k);
}

console.log("\nExemplo 4: loop e array");
const coisa = ["bola", "bonzinho", "estudo"]

for (let i = 0; i < coisa.length; i++ ){ 
    console.log(coisa[i]);
}


console.log("\n------\n");

// Usando loop for/of (exclusivo do js)
/*for(const coisa of coisa) {
    console.log(coisa);
}*/

console.log("\nExemplo 5: loop e objeto");

const pessoa = {
    nome: "fulano da silva",
    idade: 40,
    cidade: "são paulo",
    estado: "sp"
};

// Usando o loop for/in para objetos (exclusivo do js)
for(const dados in pessoa){
    console.log(pessoa[dados]);
}
/* 1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3 */

console.log("\nExercicio");

const cliente =[ 
    {
        cliente: "Espanha",
        id: "1"
    },
    {
        cliente: "Lovison",
        id: "2"
    },
    {
        cliente: "Mazzocco",
        id: "3"
    }
];

for( const resultado of cliente){
    console.log(`-cliente ${resultado.cliente}, ID: ${resultado.id}`);
}

for(let i = 0; i < cliente.length; i++){
    console.log("-cliente "+ cliente[i].cliente+ ", ID: "+cliente[i].id);
}




