const jogos = [
    {
        nome: "Tw3",
        anoLanc: "2015",
        preco: 150
    },
    {
        nome: "Elden Ring",
        anoLanc: "2022",
        preco: 300
    },
    {
        nome: "TLOU2",
        anoLanc: "2020",
        preco: 0
    },
    {
        nome: "RDR2",
        anoLanc: "2018",
        preco: 80
    },
]

var http = require('http');
var url = require('url');

function callback(request, response){
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
    var path = url.parse(request.url).pathname;

    if(path == '/listar'){
        for(var jogo of jogos)
            console.log(`${jogo.nome}, ${jogo.anoLanc}, ${jogo.preco}`);
        response.end("Jogo listado no console");
    }else if(path == '/antigos'){
        for(var jogo of jogos)
            if(jogo.anoLanc <= 2020)
                console.log(`${jogo.nome}, ${jogo.anoLanc}, ${jogo.preco}`)
    }else if(path == '/gratuitos'){
        for(var jogo of jogos)
            if(jogo.preco <= 0)
                console.log(`${jogo.nome}, ${jogo.anoLanc}, ${jogo.preco}`)
    }else if(path == '/maiscaro'){
        let jogoMaisCaro;
        for(let i = 0; i < jogos.length; i++)
            if(jogos[i].preco > jogos[i + 1].preco){
                jogoMaisCaro = jogos[i]
                response.end(`${jogoMaisCaro.nome}, ${jogoMaisCaro.anoLanc}, ${jogoMaisCaro.preco}`)
            }
        response.end("Não tem nenhum jogo mais caro que outro!");
    }else if(path == '/estatistica'){
        var precoMedio;
        var soma = 0;
        for(let i = 0; i < jogos.length; i++)
            jogos[i].preco += soma;
        console.log(soma)
        precoMedio = soma/jogos.length;
        response.end(`A média de preço dos jogos é ${precoMedio}`);
    }else
        response.end('Caminho inválido')
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor criado em http://localhost:3000")