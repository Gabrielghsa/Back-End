var http = require('http');
var url = require('url');

function callback(request, response){
    response.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"})
    var path = url.parse(request.url).pathname;

    if(path == '/soma'){
        let x = 10;
        let y = 20;
        let res = x + y
        response.end("Operação de soma: " + " Somando " + x + " + " + y + " = " + res);
    }else if(path == '/subtracao'){
        let x = 10;
        let y = 20;
        let res = x - y
        response.end("Operação de subtração: " + " Subtraindo " + x + " - " + y + " = " + res);
    }else if(path == '/divisao'){
        let x = 10;
        let y = 20;
        if(y < 0){
            response.end("ERRO");
        }
        response.end("Operação de subtração: " + " Dividindo " + x + " / " + y + " = " + x/y);
    }else if(path == '/multiplicacao'){
        let x = 10;
        let y = 20;
        
        response.end("Operação de subtração: " + " Multiplicando " + x + " * " + y + " = " + x*y);
    }else if(path == '/potencia'){
        let x = 10;
        let y = 20;
        
        response.end("Operação de subtração: " + " Elevando " + x + " ^ " + y + " = " + x**y);
    }else {
        response.end("Operação inválida!!!");
    }
}
var server = http.createServer(callback);
server.listen(3000)
console.log("Servidor criado com sucesso em http://localhost:3000");