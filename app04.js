
//04 Operadores

const color = require('@colors/colors');
const read = require('readline-sync');
console.clear();
console.log("1- Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.".cyan);
let saldo = 10000;
let deposito = 10000;
let saque = 500;

let operacao = saldo + deposito - saque;
console.log("Saldo = ".yellow + saldo);
console.log("Deposito = ".yellow + deposito);
console.log("Saque = ".yellow + saque);
console.log("Saldo = ".yellow + operacao);


console.log("2- Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.".cyan);
let variavel = Number(read.question("Informe um numero: ")).toFixed(0);
function verificaSeParOuImpar(variavel) {
    let resultado = (variavel % 2 == 0) ? "par" : "impar"; 
    console.log(resultado)
    return resultado;
}
console.log(`O numero informado eh ${verificaSeParOuImpar(variavel)}`);


console.log("3- Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.".cyan);
let usuario = 'rogerio';
let senha = '12345678';
function login(usu, pass) {
    let autenticacao = (usu === usuario && pass === senha);
    return autenticacao;
}
let usuRecebido = read.question("Informe o usuario: ");
let passRecebido = read.question("Informe a senha: ");
if(login(usuRecebido, passRecebido)) {
    console.log("Usuario logado");
} else {
    console.log("Usuario/Senha invalido(s)!")
}



console.log("4- Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.".cyan);
let boleana_1 = true;
let boleana_2 = false;
if(boleana_1 || boleana_2) {
    console.log("Uma das variaveis eh verdadeira");
}

console.log("5- Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.".cyan);
let idadeLimite = 18;
let idadeUsuario = Number(read.question("Informe sua idade!")).toFixed(0);
if(idadeUsuario >= idadeLimite) {
    console.log("Compra autorizada!");

} else {
    console.log("Compra não autorizada!");
}

