
/*

npm i @colors/colors

*/

// 03 Tipos de Dados

const color = require('@colors/colors');
console.clear();

console.log('1- Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.'.green);
let frase = "Voce ganha muitos elogios";
console.log(frase);
console.log(`O comprimento dessa frase é ${frase.length}`);
console.log(frase.toUpperCase());
console.log("");

console.log("2- Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.".green);
let comNull = null;
let vazio;
console.log(`Variavel com null = ${comNull}`);
console.log(`Variavel declarada sem nenuma atribuicao = ${vazio}`);
console.log("");

console.log("3- Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.".green);
let numero = 3;
let string_exemplo = "Quatro eh maior que ";
let verdade = true;
console.log(`${string_exemplo} ${numero} eh igual a ${verdade}`);
console.log("");

console.log("4- Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.".green);
let varNumerica = 34;
let varString = '65';
varNumerica = varNumerica.toString;
varString = parseInt(varString);
console.log(typeof varNumerica);
console.log(typeof varString);



console.log("5- Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.".green);
const variavel = "O meu dever de casa";
console.log(variavel);
console.log(variavel.toUpperCase());
console.log(variavel.toLowerCase());
//console.log(variavel.slice());

console.log("Teste Avulso".green);
let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado);

