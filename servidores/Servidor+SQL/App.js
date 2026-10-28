var http = require('http');
var url = require('url');
const CarroDb = require('./CarroDb');
const { json } = require('stream/consumers');

//Consulta o carro pelo tipo e retorna um JSON na resposta
function getCarro(response, tipo){
    //Busca os carros no banco
    CarroDb.getCarroById(tipo, function(carros){
        //Converte o array de carros para JSON
        var json = JSON.stringify(carros);
        //Envia o JSON como resposta
        response.end(json);
    })
};

//Salvar o carro
function salvarCarro(response, carro){
    CarroDb.save(carro, function(carro){
        console.log("Carro salvo com sucesso: "+carro.id);
        //Converte o carro salvo para JSON
        var json = JSON.stringify(carro);
        //Envia o JSON como resposta
        response.end(json);
    })
};

//Função callback para o servidor HTTP
function callback(request, response){
    var path = url.parse(require.url).pathname;
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    //GET
    if(request.method == "GET"){
        // verifica o path
        if(path == '/carros/classicos')
            getCarro(response, "classicos")
        else
            response.end("Not found: "+path);
    // POST    
    }else if(request.method == "POST"){
        // Faz a leitura dos dados recebidos por POST
        var body = '';
        request.on('data', function(data){
            //Concatena os dados recebidos na variável body
            body += data;
        })
    }
    request.on('end', function(){
        //Imprime o corpo (body) da requisição
        console.log(">>" + body);
        let carro = JSON.parse(body);
        console.log(carro);
        salvarCarro(response, carro);
    })
    return;
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor criado em: http://localhost:3000");
