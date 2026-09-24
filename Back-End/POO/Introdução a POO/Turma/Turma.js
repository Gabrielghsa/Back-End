export default class Turma{
    #id;
    constructor(idTurma, nome, qtdealunos, ano){
        this.#id = idTurma;
        this.nome = nome;
        this.qtdealunos = qtdealunos;
        this.ano = ano;
        this.notas = [];
        
    }

    get id(){
        return `${this.#id}`;
    }

    exibirDados(){
        console.log(`Nome da Turma ${this.nome}`);
        console.log(`Quantidade de alunos na Turma ${this.qtdealunos}`);
        console.log(`Ano/Série ${this.ano}`);
        console.log(`E a média da turma é ${this.mediaTurma()}`)
    }

    adicionarNota(nota){
        this.notas.push(nota);
    }

    mediaTurma(nota){
        var soma = 0;
        
        this.notas.forEach((nota) => {
            soma += nota
        })
        return soma/this.notas.length
    }
}

