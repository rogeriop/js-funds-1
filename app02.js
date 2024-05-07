
//1- Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
let variavelString = "teste";
let variavelNumero = 34;
let variavelBoleano = true;
console.log(" ");
console.log("1--------------------------------");
console.log(`Variavel String ${variavelString}`);
console.log(`Variavel Numero ${variavelNumero}`);
console.log(`Variavel Boleana ${variavelBoleano}`);

//2- Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
console.log(" ");
console.log("2--------------------------------");
let primeiroNome = "Antonio";
let ultimoNome = "Pinheiro";
let terceiraVariavel = primeiroNome + ultimoNome;
console.log(`Terceira variavel = ${terceiraVariavel}`);

//3- Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
console.log(" ");
console.log("3--------------------------------");
const idade = 65;
const nome = "Antonio";
const frase = `Antonio tem ${idade} anos`;
console.log(frase);

//4- Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
console.log(" ");
console.log("4--------------------------------");
let var_1 = 2024;
console.log(`var_1 = ${var_1}`);
var_1 = "Ano atual";
console.log(`var_1 = ${var_1}`);

//5- Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
console.log(" ");
console.log("5--------------------------------");
var exemplo_1 = 53;
if (exemplo_1 == 53) {
    var exemplo_2 = 45;
    console.log(`exemplo_1 dentro do bloco = ${exemplo_1}`);
    console.log(`exemplo_2 dentro do bloco = ${exemplo_2}`);
}
console.log(`exemplo_1 fora do bloco = ${exemplo_1}`);
console.log(`exemplo_2 fora do bloco = ${exemplo_2}`);


//6- Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
console.log(" ");
console.log("6--------------------------------");
const chovendo = true;
if(chovendo) {
    console.log("Levar guarda-chuva");
} else {
    console.log("Nao precisa levar guarda-chuva");
}
