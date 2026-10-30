const Pessoa = require('./Pessoa');

let pessoas = [
    new Pessoa(1, 'Macrebinho', 20),
    new Pessoa(2, 'Macrebs', 18),
    new Pessoa(1, 'Juriscleia', 24),
    new Pessoa(1, 'Cleito Rasta', 40),
]

//Função para retornar todas as pessoas
function getPessoas(callback){
    callback(pessoas)
}

//Função para retornar as pessoas pelo ID
function getPessoasById(id, callback){
    const pessoa = pessoas.find(p => p.id === id);
    callback(pessoa);
}

//Cadastrar nova pessoa
function save(dados, callback){
    const id = pessoas.length > 0 ? Math.max(...pessoas.map(p => p.id)) + 1 : 1;

    const novaPessoa = new Pessoa(id, dados.nome, dados.idade);
    pessoas.push(novaPessoa);
    callback(novaPessoa); //passando para a função no servidor a nova pessoa criada
}

//Atualizar uma pessoa existente
function update(dados, callback){
    const pessoa = pessoas.find(p => p.id === id);
    if(!pessoa)
        return callback(null);

    pessoa.nome = dados.nome;
    pessoa.idade = dados.idade;
    callback(pessoa);
}

//Atualizar somente os campos enviados
function patch(id, dados, callback){
    const pessoa = pessoas.find(p => p.id === id);
    if(!pessoa)
        return callback(null);
    if(dados.nome !== undefined)
        pessoa.nome = dados.nome;
    if(dados.idade !== undefined)
        pessoa.idade = dados.idade;
    callback(pessoa);
}

//Exclui a pessoa pelo ID
function deleteById(id, callback){
    const indice = pessoas.findIndex(p => p.id === id);
    if(indice === -1)
        return callback(false);
    pessoas.splice(indice, 1);
    callback(true);
}

module.exports = (getPessoas, getPessoasById, save, update, patch, deleteById);

