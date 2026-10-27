var mysql = require('mysql'); //Importando o modulo dp node para trabalhar com mysql

class CarroDb {
    static connect(){
        var connection = mysql.createConnection({ //Criando a conexão com o mysql
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'carro'
        });
    connection.connect(); //Conectado com o banco
    return connection;
}
    //Retornando a lista de carros
    static getCarro(callback){
        let connection = CarroDb.connect();
        let sql = "Select * from carro"
        let query = connection.query(sql, function(error, results, filds){
            if(error) throw error;
            callback(results); //retornando os dados pela callback;
        })
        console.log(query.sql);
        connection.end;
    }
     
    //Retornando os carros por tipo do banco de dados 
    static getCarroById(id, callback){
        let connect = CarroDb.connect();
        let sql = "Select id, nome, tipo from carro where tipo = '" + tipo + "'";
        let query = connection.query(sql, function(error, results, filds){
            if(error) throw error;
            callback(results);
        })
        console.log(query.sql);
        connection.end;        
    }
    //Retorna lista de carros pelo id
    static getCarroById(id, callback){
        let connection = CarroDb.connect();
        let sql = "Select * from carro where id=?";
        let query = connection.query(sql, function(error, results, filds){
            if(error) throw error;
            
            if(results.length == 0){
                console.log("Nenhum carro encontrado...");
                return;
            }
            let carro = results[0];
            callback(carro);
        })
        console.log(query.sql);
        connection.end();
    }

    //Salva um carro no Banco de dados
    //Recebe um JSON com dados do carro como parâmetro
    static save(carro, callback){
        let connection = CarroDb.connect();
        
        let sql = "Insert into carro set ? ";
        let query = connection.query(sql, function(error, results, filds){
            if(error) throw error;
            
            carro.id = results.insertId;
            carro(callback);
        })
        console.log(query.sql);
        connection.end();
    }

    static update(carro, callback){
        let connection = CarroDb.connect();
        let sql = "update carro set ? where id = ?";
        let id = carro.id;
        let query = (sql, [carro, id], function(error, results, filds){
            if(error) throw error;

            callback(carro);
        })
        console.log(query.sql);
        connection.end();
    }

    static delete(carro, callback){
        let connection = CarroDb.connect();
        let sql = "delete from carro where id = ?";
        let id = carro.id;

        let query = (sql, id, function(error, results, filds){
            if(error) throw error;
            callback(carro);
        })
        console.log(query.sql);
        connection.end();
    }
};
module.exports = CarroDb;


