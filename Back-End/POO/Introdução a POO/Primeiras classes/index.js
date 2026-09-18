/* class NomeClasse{
    nomeMetodo(){
        this.Atributo = "Valor para o atributo"
        return this.Atributo;
    }
    nomeOutroMetodo(param1, param2){
        this.primeiroAtributo = param1;
        this.segundooAtributo = param2;
        return `Valor do Primeiro Atributo: ${this.primeiroAtributo} 
        Valor do Segundo Atributo: ${this.segundooAtributo}`
    }

}

const Obj = new NomeClasse();
Obj.Atributo = "Teste" //Assim vai mudar o valor para teste
console.log(Obj.Atributo)//Mostrando o valor 'Teste'

console.log(Obj.nomeMetodo()) //Assim mostra o valor do atributo que está setado lá na classe
console.log(Obj.nomeOutroMetodo("Macrebs", 20)) */


/* console.log(pessoa.imprimir("Macrebs", 24))
console.log(pessoa.imc(82.5, 1.87)) */


/* class Caixa{
    constructor(codigo, saldo){
        this.codigo = codigo;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor
        return `Depositou: R${valor}`
    }
    mostrarSaldo(){
        return `Saldo: R${this.saldo}`
    }
} 

const caixa = new Caixa(1, 350);
console.log(caixa.codigo)
console.log(caixa.mostrarSaldo());
console.log(caixa.depositar(200))
console.log(caixa.mostrarSaldo()) */



class Pessoa{
    constructor(nome, idade){ //Utilizado para quando instanciar um novo objeto Pessoa vc pode passar os parâmentros na instanciação 
    this.nome = nome;
    this.idade = idade;
    }

    setNome(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }
    setIdade(idade){
        this.idade = idade;
    }

    getIdade(){
        return this.idade;
    }
    setPeso(peso){
        this.peso = peso;
    }

    getPeso(){
        return this.peso;
    }
    setAltura(altura){
        this.altura = altura;
    }

    getAltura(){
        return this.altura;
    }
    imprimir(nome, idade){
        this.nome = nome;
        this.idade = idade;
        return `${this.nome} tem ${this.idade} anos`
    }

    imc(peso, altura){
        this.peso = peso;
        this.altura = altura;
        return "IMC: " + (this.peso / (this.altura ** 2).toFixed());
    }
}

/* const pessoa = new Pessoa("Macrebs", 30);
console.log(pessoa.getNome())
pessoa.setNome("Juriscleia");
pessoa.setIdade(38);
pessoa.setPeso(89.8);
pessoa.setAltura(1.99);
console.log(pessoa.getNome(), pessoa.getIdade(), pessoa.getPeso(), pessoa.imc(pessoa.getPeso(), pessoa.getAltura())); */


class Funcionario extends Pessoa{
    constructor(nome, idade, matricula, salarioBruto){
        super(nome, idade);
        this. salarioBruto = salarioBruto;
        this.matricula = matricula;
    }
    setMatricula(matricula){
        this.matricula = this.matricula;
    }
    getMatricula(){
        return this.matricula;
    }
    setSalarioBruto(salarioBruto){
        this.salarioBruto = salarioBruto;
    }
    getSalarioBruto(){
        return this.salarioBruto;
    }

    calculaSalario(){
        const salarioLiquido = this.salarioBruto - (this.salarioBruto * 0.13);
        /* return `${this.nome} tem um salário liquído de ${salarioLiquido}`; */
        return salarioLiquido
    }
}
const funcionario = new Funcionario("José", 20, 2134, 2389);
console.log(funcionario.getIdade())
console.log(funcionario.calculaSalario())

funcionario.setIdade(39)
funcionario.setMatricula(542791)
funcionario.setSalarioBruto(1621)
funcionario.setNome("Macrebs")
console.log(`O funcionário ${funcionario.getNome()} de matricula ${funcionario.getMatricula()} tem ${funcionario.getIdade()} anos de idade e possui um salário de R$${funcionario.calculaSalario()}`)