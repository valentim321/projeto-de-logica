/* 
Totem de autoatendimento da lanchonete

O totem da lanchonete irá solicitar o nome do sanduíche. Depois disso,
o cliente pode digitar até cinco acompanhamentos por R$ 2,00 cada.
Ao final será exibido o pedido completo e o valor a pagar.

✅ Ao digitar “concluir”, o programa não pede mais acompanhamentos. */

const prompt = require("prompt-sync")();

console.log("== APP LANCHONETE ==")

const sanduiches = [];
const pedido= [];
const acompanhamentos=[];
const preço = []; 
var pre = 10;
var ac = 2;
var soma = 0;
var neg = -2;

var lanche = {
    nome: "Cachorro Quente",
    valor: "R$10,00",
}
sanduiches.push(lanche);
lanche = {
    nome: "Hamburguer",
    valor: "R$10,00",
}
sanduiches.push(lanche);
lanche = {
    nome: "Salgado frito",
    valor: "R$10,00",
}
sanduiches.push(lanche);
lanche = {
    nome: "Salgado de forno",
    valor: "R$10,00",
}
sanduiches.push(lanche);
lanche = {
    nome: "Sanduiche natural",
    valor: "R$10,00",
}
sanduiches.push(lanche);


console.log("Cardapio de sanduiches", sanduiches); 
var resposta = prompt("Escolha o seu:  "); "\n"
pedido.push(resposta);
preço.push(pre)

var acomp = {
    nome: "Batata frita",  
    valor: "R$2,00"
}
acompanhamentos.push(acomp);
acomp = {
    nome: "Bacon",  
    valor: "R$2,00"
}
acompanhamentos.push(acomp);
acomp = {
    nome: "Batata palha",  
    valor: "R$2,00"
}
acompanhamentos.push(acomp);
acomp = {
    nome: "molho extra",  
    valor: "R$2,00"
}
acompanhamentos.push(acomp);
acomp = {
    nome: "queijo ralado",  
    valor: "R$2,00"
}
acompanhamentos.push(acomp); "\n"
console.log("Você pode incluir até 5 acompanhamentos em seu pedido") 
console.log("Desja incluir algum ?",acompanhamentos)


do {
    resposta = prompt(" Digite o nome do acompanhamento:")
    pedido.push(resposta);
    preço.push(ac);
    console.log("digite concluir caso não queira mais algum acompanhamento!")
}
 while(resposta!="concluir") {
    preço.push(neg)
    console.log("Seu pedido foi:", pedido) 
}

for(var i = 0; i < preço.length; i++) {
    soma += (preço[i]);
}"\n"
console.log("O total do seu lanche ficou em R$",soma) 

console.log("Obrigado pela preferencia!! Aguarde enquanto seu pedido está sendo preparado!!")