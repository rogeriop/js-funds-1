
//05 Funções

const read = require('readline-sync');
const color = require('@colors/colors');

console.clear();

console.log
("1- Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.".green);
const sauda = (nome) => `Ola ${nome}`;
let nomeRequisitado = read.question("Informe seu nome: ");
console.log(sauda(nomeRequisitado));

console.log
("2- Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.".green);
const validaIdade = (idade) => {
    return (idade >= 18) ? "Maior de Idade" : "Menor de idade";
}
let idadeParaAvaliar = read.question("Informe idade: ");
console.log(validaIdade(idadeParaAvaliar));


console.log
("3- Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.".green);
const sePalindromo = (str) => (Array.from(str).reverse().join("") === str) ? "Verdadeiro" : "Falso";
    //return Array.from(str).reverse().join("")
    
let validaPalavra = read.question("Informe a palavra: ");
console.log(sePalindromo(validaPalavra));

console.log
("4- Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.".green);
const retornaMaior = (n1, n2, n3) => {
    let nAux = n1;
    if(n2 > nAux) nAux = n2;
    if(n3 > nAux) nAux = n3;
    return nAux;    
}
const numero1 = read.question("Informe o primeiro numero: ");
const numero2 = read.question("informe o segundo numero: ");
const numero3 = read.question("Informe o terceiro numero: ");
console.log(retornaMaior(numero1, numero2, numero3));

console.log
("5- Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.".green);
const calculaPotencia = (base, expoente) => {
    let result = 1;
    for(let i = 1;i <= expoente;i++) {
        result = result * base;
    }
    return result;
}
const base = read.question("Informe a base: ");
const expoente = read.question("Informe o expoente: ");
console.log(calculaPotencia(base, expoente));

