/* Saldo na conta corrente

A agência bancária possui duas listas: Clientes e o valor do saldo em conta corrente.
 O operador do caixa vai perguntar o nome do cliente e o sistema irá informar o saldo da conta.

✅ O nome digitado não diferencia maiúsculas e minúsculas
✅ O valor é ponto flutuante. Inclua saldos zerados e negativos
✅ Escreva no Discord um nome e saldo, para montar a lista
*/

const prompt = require("prompt-sync")();
console.log("== APP BANCO ==")
const clientes = [];
const saldo = [];

var conta = {
    nome: "Fisiquela",
    saldo: "600,00"
}
clientes.push(conta);
conta = {
    nome: "Annie",
    saldo: "844,500"
}
clientes.push(conta);
conta = {
    nome: "Charmosa",
    saldo: "73,00"
}
clientes.push(conta);
conta = {
    nome: "Jose",
    saldo: "0,50"
}
clientes.push(conta);
conta = {
    nome: "Neymar",
    saldo: "-150,00"
}
clientes.push(conta);
conta = {
    nome: "Luffy",
    saldo: "0,00"
}
clientes.push(conta);
conta = {
    nome: "Tony stark",
    saldo: "200,00"
}
clientes.push(conta);
conta = {
    nome: "Bruce Wayne",
    saldo: "32,00"
}
clientes.push(conta);
conta = {
    nome: "Ellie",
    saldo: "1000,00"
}
clientes.push(conta);
conta = {
    nome: "Barry Allen",
    saldo: "2469,00"
}
clientes.push(conta);
conta = {
    nome: "Tio Patinhas",
    saldo: "23.900,00"
}
clientes.push(conta);
conta = {
    nome: "Zepa",
    saldo: "20.000,00"
}
clientes.push(conta);

var resposta = prompt("Informe seu nome para acharmos sua conta: ")


switch (resposta){
    case "Fisiquela": resposta = clientes[0];
    break;
    case "fisiquela": resposta = clientes[0];
    break;
    case "Annie": resposta= clientes[1];
    break;
    case "annie": resposta = clientes[1];
    break;
    case "Charmosa": resposta = clientes[2];
    break;
    case "charmosa":resposta = clientes[2];
    break;
    case "Jose":resposta= clientes[3];
    break;
    case "jose":resposta = clientes[3];
    break;
    case "Neymar": resposta = clientes[4];
    break;
    case "neymar":resposta = clientes[4];
    break;
    case "Luffy": resposta = clientes[5];
    break;
    case "luffy": resposta = clientes[5];
    break;
    case "Tony Stark": resposta = clientes[6];
    break;
    case "tony stark":resposta= clientes[6];
    break;
    case "Bruce Wayne": resposta= clientes[7];
    break;
    case "bruce wayne":resposta= clientes[7];
    break;
    case "Ellie": resposta = clientes[8];
    break;
    case "ellie": resposta = clientes[8];
    break;
    case "Barry Allen": resposta = clientes[9];
    break;
    case "barry allen": resposta = clientes[9];
    break;
    case "Tio Patinhas": resposta = clientes[10];
    break;
    case "tio patinhas": resposta= clientes[10];
    break;
    case "Zepa": resposta = clientes[11];
    break;
    case "zepa": resposta = clientes[11];
    break;
}
console.log("Seu saldo na conta é de: ",resposta )