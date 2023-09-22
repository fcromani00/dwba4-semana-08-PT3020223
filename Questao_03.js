// Dados do aluno 1
var nomeAluno1 = "João da Silva";
var nota1Aluno1 = 7;
var nota2Aluno1 = 8.5;
var pesoNota1Aluno1 = nota1Aluno1 * 0.6;
var pesoNota2Aluno1 = nota2Aluno1 * 0.4;
var notaTotalAluno1 = pesoNota1Aluno1 + pesoNota2Aluno1;

// Dados do aluno 2
var nomeAluno2 = "Maria Oliveira";
var nota1Aluno2 = 8;
var nota2Aluno2 = 9.0;
var pesoNota1Aluno2 = nota1Aluno2 * 0.6;
var pesoNota2Aluno2 = nota2Aluno2 * 0.4;
var notaTotalAluno2 = pesoNota1Aluno2 + pesoNota2Aluno2;

// Dados do aluno 3
var nomeAluno3 = "Pedro Santos";
var nota1Aluno3 = 6.5;
var nota2Aluno3 = 7.0;
var pesoNota1Aluno3 = nota1Aluno3 * 0.6;
var pesoNota2Aluno3 = nota2Aluno3 * 0.4;
var notaTotalAluno3 = pesoNota1Aluno3 + pesoNota2Aluno3;

// Exibir informações dos alunos em alertas
alert("Aluno 1:\nNome: " + nomeAluno1 + "\nNota 1: " + nota1Aluno1 + "\nNota 2: " + nota2Aluno1);
alert("Aluno 2:\nNome: " + nomeAluno2 + "\nNota 1: " + nota1Aluno2 + "\nNota 2: " + nota2Aluno2);
alert("Aluno 3:\nNome: " + nomeAluno3 + "\nNota 1: " + nota1Aluno3 + "\nNota 2: " + nota2Aluno3);

// Exibir notas totais dos alunos
alert("Nota Total do Aluno 1: " + notaTotalAluno1.toFixed(2));
alert("Nota Total do Aluno 2: " + notaTotalAluno2.toFixed(2));
alert("Nota Total do Aluno 3: " + notaTotalAluno3.toFixed(2));