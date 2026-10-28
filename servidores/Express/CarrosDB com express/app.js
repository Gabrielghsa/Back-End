const express = require('express');
const app = express();
const CarroDB = require('./CarroDB');

//Configurando para ler dados JSON e formulários
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Configura uma rota raiz
app.get('/', function(req, res){
    res.send("API dos carros");
})

//GET/carros
app.get('/carros', function(req, res){
    CarroDB.getCarro(function(carro){
        res.json(carros);
    })
})

//GET/carrod/id
app.get('carros/:id', function(req, res){
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({erro: 'ID inválido'})
    };
    CarroDB.getCarroById(id, function(carro){
        res.json(carro);
    })
})

//GET/carros/tipo
app.get('carros/tipo/:tipo', function(req, res){
    const tipo = req.params.tipo;
    CarroDB.getCarroByTipo(tipo, function(carro){
        res.json(carros);
    })
})

//POST/carros
app.post('/carros', function(req, res){
    const carro = res.body;
    CarroDB.save(carro, function(carroSalvo){
        res.json(carroSalvo)
    })
})

//PUT/carros
app.put('/carros', function(req, res){
    const carro = req.body;
    CarroDB.update(carro, function(carroAtualizado){
        res.json({msg: "Carro atualizado com sucesso"})
    })
})

//DELETE/carro/:id
app.delete('/carros/:id', function(req, res){
    const id = parseInt(req.params.id);
    if(isNaN(id)){ return res.status(400).json({erro: "ID inválido"})}
    console.log("Deletar carro " + id);
    CarroDB.deleteById(id, function(affectedRows){
        res.json({msg: "Carro Deletado"})
    })
})

const server = app.listen(3000, function(){
    console.log(`Servidor iniciado em http://localhost:3000`);
    
})

