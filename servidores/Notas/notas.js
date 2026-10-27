var media = calcMedia(nota1, nota2); 
var nota1 = 7;
var nota2 = 3;
var situacao;
var freq = 55;

function calcMedia(nota1, nota2){
    media = (nota1 + nota2) / 2;
    return media;
}
function verificarSituacao(media){
    if(media >= 6)
        return situacao = true;
    else 
        return situacao = false;
}

var http = require('http');
var url = require('url');

function callback(request, response){
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    var path = url.parse(request.url).pathname;

    if(path == '/media'){
        calcMedia(nota1, nota2);
        response.end("A média das notas é: " + media);
    }else if(path == '/sit'){
        console.log(media);
        verificarSituacao(media);
        if(situacao)
            response.end("Aluno aprovado");
        else
            response.end("Aluno reprovado");
    }else if(path == '/frequencia'){
        if(freq >= 75)
            response.end("Frequência atiginda");
        else
            response.end("Frequência não atingida");
    }else
        response.end("Caminho inválido");
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor criado com sucesso em http://localhost:3000")
