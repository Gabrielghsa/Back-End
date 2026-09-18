import Figura from "./figura.js";

export default class Circulo extends Figura{
    constructor(raio){
        super("Círculo");
        this.raio = raio;
    }

    calcularArea(){
        return `A área do ${this.nome} com raio ${this.raio} é: ${(Math.PI * (this.raio ** 2)).toFixed(2)}`;
    }
}