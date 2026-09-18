import Figura from "./figura.js";

export default class Triangulo extends Figura{
    constructor(base, altura){
        super("Triângulo");
        this.base = base;
        this.altura = altura;
    }
    
    calcularArea(){
        return `A área do ${this.nome} é ${this.base * this.altura / 2}`;
    }

}