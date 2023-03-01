/*  Sistema de notas escolares

A escola de programação precisa corrigir a avaliação de 5 alunos.
 As avaliações são objetos e a média de cada um deve ser calculada em uma função.

✅ Cada objeto tem propriedades nome, módulo, nota_4 e nota_6
✅ O programa exibe se o aluno foi “aprovado” ou “reprovado”
 */

console.log("== app nota ==")

const turma = [];

var aluno = {
    nome: "Luiz",
    modulo: 1,
    nota1: 8.0,
    nota2: 7.0,
    nota3: 9.0, 
}
turma.push(aluno);

var aluno = {
    nome: "Gabriella",
    modulo: 1,
    nota1: 8.0,
    nota2: 6.0,
    nota3: 9.0,  
    
}
turma.push(aluno);

var aluno = {
    nome: "Isabella",
    modulo: 1,
    nota1: 9.0,
    nota2: 7.0,
    nota3: 8.0,  
    
}
turma.push(aluno);

var aluno = {
    nome: "Maria",
    modulo: 1,
    nota1: 5.0,
    nota2: 7.0,
    nota3: 6.0,  
    
}
turma.push(aluno);

var aluno = {
    nome: "Luiza",
    modulo: 1,
    nota1: 8.0,
    nota2: 8.0,
    nota3: 5.0,   
    
}
turma.push(aluno);

function media (nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3)/3)

}
console.log (turma)

var resultado = media(8.0 , 7.0 , 9.0)
console.log("aluno Luiz, media:", resultado)
if (resultado>=7){
    console.log("Aprovado!!")
} else{
    console.log("Reprovado!!")
}
 
 resultado = media(8.0 , 7.0 , 9.0)
console.log("aluna Gabriella, media:", resultado)
if (resultado>=7){
    console.log("Aprovado!!")
} else{
    console.log("Reprovado!!")
}
 
resultado = media(9.0 , 7.0 , 8.0)
console.log("aluna Isabeella, media:", resultado)
if (resultado>=7){
    console.log("Aprovado!!")
} else{
    console.log("Reprovado!!")
}

resultado = media(5.0 , 7.0 , 6.0)
console.log("aluna Maria, media:", resultado)
if (resultado>=7){
    console.log("Aprovado!!")
} else{
    console.log("Reprovado!!")
}

resultado = media(8.0 , 8.0 , 5.0)
console.log("aluna Luiza, media:", resultado)
if (resultado>=7){
    console.log("Aprovado!!")
} else{
    console.log("Reprovado!!")
}

