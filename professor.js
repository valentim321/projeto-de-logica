/* O professor irá fazer a chamada e armazenar os nomes dos presentes em uma variável.
 Após o último nome, a relação de alunos irá aparecer no console.

✅ Faça duas versões do programa, com while e do..while
✅ O programa termina quando a entrada for vazia. */

/*
const prompt = require("prompt-sync")();

console.log("==APP DA CHAMADA==");
const presentes = [];

    
    while (nomes!= "") {
    var nomes = prompt("digite seu nome para chamada: ")
    presentes.push(nomes)
    if (nomes!=""){
    console.log(nomes, "Sua presensa foi confirmada!"); }}

console.log("Alunos presentes: ", presentes);

*/

// CHAMDA COM  DO WHILE


const prompt = require("prompt-sync")();

console.log("==APP DA CHAMADA==");
const presentes = [];

do {
    var nomes = prompt("Digite seu nome para a chamada: ")
    presentes.push(nomes);

    if(nomes!=""){
        console.log("Sua presença foi confirmada,",nomes) }
    
    } while (nomes!=""){
 console.log("Lista de alunos presentes :",presentes)
}


