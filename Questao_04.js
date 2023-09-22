class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6 + this.segundaNota * 0.4);
  }

  situacao() {
    const media1 = this.media();
    if (media1 > 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

const alunos = [];

const aluno1 = new Aluno("João", "da Silva", 7, 8);
const aluno2 = new Aluno("Maria", "Oliveira", 6, 7);
const aluno3 = new Aluno("Pedro", "Santos", 8, 9);
const aluno4 = new Aluno("Ana", "Ferreira", 5, 6);
const aluno5 = new Aluno("Lucas", "Silveira", 9, 8);

alunos.push(aluno1);
alunos.push(aluno2);
alunos.push(aluno3);
alunos.push(aluno4);
alunos.push(aluno5);

function mostrarInformacoesAlunos(arrayDeAlunos) {
  for (let i = 0; i < arrayDeAlunos.length; i++) {
    const aluno = arrayDeAlunos[i];
    alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
  }
}

mostrarInformacoesAlunos(alunos);
