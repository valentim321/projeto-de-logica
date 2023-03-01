/* O professor irá fazer a chamada e armazenar cada nome em uma posição do array de alunos.

✅ O console.log é preparado para exibir um array inteiro
✅ O programa termina quando a entrada for vazia.    */

const prompt = require('prompt-sync')();
console.log("==APP CHAMADA==");

var alunos = [];


while(nome!= ""){
    
    var nome = prompt("Qual o seu nome?  ")
    alunos.push(nome)

   if(nome!=""){
    console.log(nome,"Presença confirmada");
   }
}

console.log("Alunos presentes",alunos);


