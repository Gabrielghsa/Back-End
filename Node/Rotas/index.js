const http = require('http');
const porta = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    if(req.url == '/')
        res.write('<h1>Bem-Vindo</h1>');
    else if(req.url == '/canal')
        res.write('<h1>Bem-Vindo ao Canal</h1>');
    else if(req.url == '/curso')
        res.write('<h1>20 ANOS</h1>');
    res.end();

})

servidor.listen(porta, host, ()=>{console.log('servidor Rodando')});