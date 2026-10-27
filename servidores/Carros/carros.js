var http = require('http');
var url = require('url');

function callback(request, response){
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    //faz o parse da url separando o caminho
    var parts = url.parse(request.url);
    var path = parts.pathname;

    if(path == '/carros/classicos'){
        let quantidade = 5;
        let precoMedio = 30000;
        response.end("Carros clássicos: " + "Valor total dos carros: "+ quantidade * precoMedio);
       
    }   
    else if(path == '/carros/esportivos'){
        let quantidade = 5;
        let precoMedio = 50000;
        response.end("Carros esportivos " + "Valor total dos carros: "+ quantidade * precoMedio);
        
    }
    else if(path == '/carros/luxo'){
        let quantidade = 5;
        let precoMedio = 70000;
        response.end("Carros de luxo: " + "Valor total dos carros: "+ quantidade * precoMedio);
        
    }
    else{
        response.end("Caminho inválido!!!");
    }
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor criado com sucesso em http://localhost:3000");