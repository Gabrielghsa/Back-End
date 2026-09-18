import Figura from "./figura.js";

export default class Quadrado extends Figura{
    constructor(ladoQuadrado){
        super("Quadrado");
        this.lado = ladoQuadrado;
    }

    calcularArea(){
        return `A área do ${this.nome} é: ${this.lado ** 2}`;
    }
}
