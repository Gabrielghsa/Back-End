import Turma from "./Turma.js";
import Aluno from "./Aluno.js";     

const turma1 = new Turma(12, "Back-End", 30, "2-semestre");

for(let i = 1; i <= 90; i++){
    const numero = Math.floor(Math.random() * 101);
    turma1.adicionarNota(numero);   
}
turma1.exibirDados()

console.log('\n\n');
const aluno1 = new Aluno("Macrebinho", "123456", 2, turma1)
 
for(let i = 1; i <= 3; i++){
    const notasDoAluno = Math.floor(Math.random() * 34);
    aluno1.adicionarNotasAluno(notasDoAluno);   
}

aluno1.exibirDadosAluno()
console.log(aluno1.matricula)