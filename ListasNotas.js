/* Notas escolares em lista

A escola de programação aumentou a correção de avaliações, permitindo lançar todas as notas da turma no sistema.

✅ O sistema deverá exibir um relatório de notas
✅ O aluno com a maior nota
✅ A quantidade de alunos abaixo da média 7.0
  */

const lista = [];

var alunos = {
  nome: "Luiz Felipe",
  nota: 8, 
  nota1: 9,
  nota2:8,
  media: (8.3),
}
lista.push(alunos);

alunos = {
  nome: "Jose",
  nota: 7,
  nota1: 9,
  nota2:7,
  media: (7.6),
}
lista.push(alunos);

alunos = {
  nome: "Maria",
  nota: 9,
  nota1: 9,
  nota2:5,
  media: (7.6)
}
lista.push(alunos);

alunos = {
  nome: "Marta",
  nota: 7,
  nota1: 5,
  nota2:7,
  media: (6.3),
}
lista.push(alunos);
alunos = {
  nome: "Pedro",
  nota: 8,
  nota1: 9,
  nota2:7,
  media: (8.0)
}
lista.push(alunos);
alunos = {
  nome: "Joana",
  nota: 4,
  nota1: 9,
  nota2:7,
  media: (6.6)
}
lista.push(alunos);
alunos = {
  nome: "Gabriella",
  nota: 10,
  nota1: 9,
  nota2:8,
  media: (9.0)
}
lista.push(alunos);
alunos = {
  nome: "Daniella",
  nota: 7,
  nota1: 9,
  nota2:5,
  media: (7.0)
}
lista.push(alunos);
alunos = {
  nome: "Aline",
  nota: 3,
  nota1: 5,
  nota2:7,
  media: (5.0)
}
lista.push(alunos);

console.log(lista);

var cont = 0;
for (var i = 0; i <lista.length; i++){
  const item = lista[i];

  if (item.media < 7) cont++;
}
console.log("Numero de reprovados da turma:",cont)

// aluno com a maior nota 

var mediaalunos= [ 8.3 , 7.6 , 7.6, 6.3 , 8.0 ,6.6 , 9.0, 7.0, 5.0 ]

var maxi = Math.max(...mediaalunos)
   
      console.log("Maior nota da turma: ",maxi)
    if (maxi==9){
      console.log("aluno com maior nota da tumra: Gabriella")
    }