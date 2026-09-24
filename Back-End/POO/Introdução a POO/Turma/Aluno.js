import Turma from "./Turma.js";

export default class Aluno {
    #matricula;
    constructor(nome, matricula, ano, turma){
        this.nome = nome;
        this.#matricula = matricula;
        this.ano = ano;
        this.turma = turma;
        this.notasAluno = [];
    }

    get matricula(){return this.#matricula};

    exibirDadosAluno(){
        console.log(`Aluno: ${this.nome}.`);
        console.log(`Está no ${this.ano} Ano/Semestre da matéria ${this.turma.nome}.`);
        console.log(`Total das notas: ${this.somaNotas()}`);
        console.log(`${this.situacao(this.notasAluno)}`);
    }

    adicionarNotasAluno(notas){
        this.notasAluno.push(notas);
    }

    somaNotas(){
        let soma = 0;

        this.notasAluno.forEach(nota =>{
            soma += nota;
        })

        return soma;
    }

    situacao(mediaAluno){
       return (this.somaNotas() > 60) ? `O aluno ${this.nome} está aprovado na matéria ${this.turma.nome}` : `O aluno ${this.nome} está reprovado na matéria ${this.turma.nome}`
    }
}