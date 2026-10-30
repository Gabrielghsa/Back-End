const express = require('express');
const app = express();
const PessoaDB = require('./PessoaDB');

//Configurando o servidor para receber JSON e formulários
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Rota raiz
app.get('/', (req, res) => {
    res.send('Testando');
})

//Get /pessoas (retorna todas as pessoa)
app.get('/pessoas', (req, res) =>{
    PessoaDB.getPessoas((pessoas)=>{
        res.json(pessoas);
    })
})

//GET /pessoas/:id
app.get('/pessoas/:id', (req, res)=>{
    const id = parseInt(req.params.id);

    if(isNaN(id) || id <= 0){
        return res.status(400).json({erro: 'ID inválido'});
    }

    PessoaDB.getPessoasById(id, (pessoa) => {
        if(!pessoa)
            return res.status(400).json({erro: 'Pessoa não encontrada'});

        res.json(pessoa);
    })
})

//POST /pessoas (Cadastra uma nova pessoa)
app.post('/pessoas', (req, res)=>{
    const pessoa = req.body;

    //Verificando se os dados obrigatórios foram enviados
    if(typeof pessoa.nome !== 'string' || !pessoa.nome.trim() || !Number.isInteger(pessoa.idade) || pessoa.idade < 0)
        return res.status(400).json({erro: 'Informe um nome e uma idade váida'})
    
    PessoaDB.save(pessoa, (pessoaSalva) => {
        res.status(201).json(pessoaSalva);
    })
})

//PUT /pessoas/:id
app.put('/pessoas/:id', (req, res)=>{
    const id = parentInt(req.params.id);
    const dados = req.body;
    if(isNaN(id || id <= 0))
        return res.status(400).json({erro: 'Informe um nome e uma idade váida'})

    //O id vem da url e não do corpo enviado
    const pessoa = {
        id: id, 
        nome: dados.nome.trim(),
        idade: dados.idade
    }

    PessoaDB.update(pessoa, (pessoaAtualizado) => {
        if(!pessoaAtualizado)
            return res.status(400).json({erro: 'Pessoa não enocntrada'});
        
        res.json({mensagem: 'Pessoa atualizada com sucesso', pessoa: pessoaAtualizado})
    })
})

//PATCH /pessoas (atualiza somente os campos enviados)
app.patch('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dados = req.body;

    if(isNaN(id) || id <= 0)
        return res.status(400).json({erro: 'ID inválido'});

    //Validando os campos apenas quando enviados
    if(Object.hasOwn(dados, 'nome') && (typeof dados.nome !== 'string' || !dados.nome.trim()))
        return res.status(400).json({erro: 'Nome Inválido'});

    if(Object.hasOwn(dados, 'idade') && (!Number.isInteger(dados.idade) || dados.idade < 0))
        return res.status(400).json({erro: 'Idade inválida'});

    PessoaDB.patch(id, dados, (pessoaAtualizado) => {
        if(!pessoaAtualizado)
            return res.status(404).json({erro: 'Pessoa não encontrada'});

        res.json(pessoaAtualizado);
    })
})

//DELETE /pessoas
app.delete('/pessoas', (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id) || id < 0)
        return res.status(400).json({erro: 'ID inválido'})

    PessoaDB.deleteById(id, (excluido) => {
        if(!excluido)
            return res.status(400).json({erro: 'Pessoa não encontrada'});

        res.json({mensagem: 'Pessoa excluída com sucesso'});
    })
})

//Rota inválida
app.use((req, res) => { 
    res.status(400).json({erro: 'Rota não encontrada'});
})

app.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000");
    
})
