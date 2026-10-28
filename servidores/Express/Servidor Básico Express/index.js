var express = require('express');
var bodyParser = require('body-parser'); //O módulo body-parser é um middleware / interceptors
                                        //Atua antes ou depois de uma requisição para atualizar alguma informação,
                                       //intercepta a requisição do POST e adiciona todos os parâmetros no objeto req.body

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var app = express();


//Confiugura uma rota raiz
app.get('/', function(req, res){
    res.send("Primeiro servidor com express!!!");
})

//GET por query string, ex: http://localhost:3000/pessoa/?nome=bilu&sobrenome=zinho
app.get('/pessoa', function(req, res){
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type("text");
    res.send(nome + "" + sobrenome);
})

//GET por Path Parameters, ex: http://localhost:3000/pessoa/1
app.get('/pessoa/:id', function(req, res){
    let id = req.params.id;
    res.send("Buscar a Pessoa " + id);
}) 

//POST
app.post('/pessoa', function(req, res){
    let nome = req.body.name;
    let sobrenome = req.body.sobrenome;
    res.send(nome + " " + sobrenome);
})


//Iniciando o servidor 
var server = app.listen(3000, function(){
    //var host = server.address().address;
    //var port = server.address().port;
    console.log("Servidor iniciado em http://localhost:3000");
})