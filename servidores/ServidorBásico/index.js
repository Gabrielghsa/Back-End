const http = require('http');
const Pessoa = require('./Pessoa');


function callback(request, response) {
    const url = new URL(request.url, 'http://localhost:3000');
    var path = url.pathname;

   

    if (request.method === 'GET' && path === '/teste') {
        var pessoas = [];
        var p1 = new Pessoa("Macrebs", "Silva");
        var p2 = new Pessoa("Macrebinho", "Santana");
        pessoas.push(p1);
        pessoas.push(p2);

        var json = JSON.stringify(pessoas);

        response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

        response.end(json);
    }
    else {
        response.writeHead(404, {
            "Content-Type": "text/plain; charset=utf-8"
        });

        response.end(JSON.stringify({erro: "Rota não encontrada", caminho:path}));
    }
    
}

var server = http.createServer(callback);
server.listen(3000, () => {
    console.log("Servidor iniciado em http://localhost:3000/");
});
