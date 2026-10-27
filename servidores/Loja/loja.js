const produtos = [
    {
        nome: 'Mouse',
        preco: 100,
        marca: 'Corsair'
    }, 
    {
        nome: 'Teclado',
        preco: 800,
        marca: 'Logitech'
    },
    {
        nome: 'Monitor',
        preco: 1000,
        marca: 'LG'
    }
]

var http = require('http');
var url = require('url');

function callback(request, response){
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
    
    var path = url.parse(request.url).pathname;

    if(path == '/produtos'){
        
        for(const prod of produtos){
            response.end(`${prod.nome}\n ${prod.marca}\n ${prod.preco}`);
        }
    }else if(path == '/desconto'){
        let precoDesc = produtos[1].preco * 0.10;
        response.end(`Desconto de 10% no Teclado. Preço final ${produtos[1].preco - precoDesc}`);
    }else if(path == '/frete'){
        response.end(`Valor do frete: R$15,00`);
    }else if(path == '/total'){
        let precoDesc = produtos[1].preco * 0.10;
         
        response.end(`Valor total da compra R$${produtos[1].preco - precoDesc + 15}`);
    }else
        response.end("Caminho inválido");
}

var server = http.createServer(callback);
server.listen(3000);
console.log("Servidor criado em http://localhost:3000");