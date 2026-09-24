/* class Retangulo{
    constructor(x, y){ //Nome do parâmetro pode ser qualquer coisa
        this.altura = x;
        this.largura = y;
    }
    get area(){
        return this.calculaArea();
    }

    calculaArea(){
        return this.altura * this.largura;
    }
}
const quadrado = new Retangulo(10,10);
console.log(quadrado.area) */


class Funcionario{
    constructor(Nome, DataNasc, Salario){
    this.Nome = Nome;
    this.DataNasc = new Data();
    this.Salario = Salario;
    }
}

class Data{
    constructor(dia, mes){
    this.Dia = dia;
    this.Mes = mes;
    }
}

const F = new Funcionario("Macrebs", 3000)

console.log(F.DataNasc)
console.log(F.DataNasc);

