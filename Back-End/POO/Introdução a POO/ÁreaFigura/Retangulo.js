import Figura from "./figura.js";

export default class Retangulo extends Figura{
    constructor(base, altura){
        super("Retângulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return `A área do ${this.nome} é: ${this.base * this.altura}`;
    }
}