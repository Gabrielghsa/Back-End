class Animal{
    constructor(nome){
        this.nome = nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    mover(distancia){
        console.log(`${this.nome} se moveu ${distancia} metros! `)
    }
}

const animal = new Animal("Gabiru");
animal.mover(10)

class Cobra extends Animal{
    constructor(nome){
        super(nome);
    }
    mover(distancia){
        console.log(`Rastejando...`)
        super.mover(distancia)
    }
}

const cobra = new Cobra("Sucuri")
cobra.mover(80)

class Cavalo extends Animal{
    constructor(nome){
        super(nome);
    }
    mover(distancia){
        console.log("Cavalgando");
        super.mover(distancia)
    }
}
const cavalo = new Cavalo("Alazão")
cavalo.mover(120)
