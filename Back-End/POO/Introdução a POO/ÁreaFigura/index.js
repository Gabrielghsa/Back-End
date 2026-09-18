import Figura from "./figura.js";
import Quadrado from "./quadrado.js";
import Retangulo from "./retangulo.js";
import Circulo from "./circulo.js";
import Triangulo from "./triangulo.js";

const formQuadrado = document.getElementById("formQuadrado");
const formRetangulo = document.getElementById("formRetangulo");
const formTriangulo = document.getElementById("formTriangulo");
const formCirculo = document.getElementById("formCirculo");


formQuadrado.addEventListener('submit', (event) => {
    event.preventDefault();
    const areaResQ = document.getElementById("areaResQ")
    const lado = Number(document.getElementById("ladoQuadrado").value);

    const quadrado = new Quadrado(lado);
    areaResQ.innerText = quadrado.calcularArea();
    console.log();
})

formRetangulo.addEventListener('submit', (event) =>{
    event.preventDefault();
    const areaResR = document.getElementById("areaResR")
    const baseRetangulo = Number(document.getElementById("baseRetangulo").value);
    const alturaRetangulo = Number(document.getElementById("alturaRetangulo").value);

    const retangulo = new Retangulo(baseRetangulo, alturaRetangulo);
    areaResR.innerText = retangulo.calcularArea();

})

formTriangulo.addEventListener('submit', (event) =>{
    event.preventDefault();
    const areaResT = document.getElementById("areaResT");
    const baseTriangulo = Number(document.getElementById("baseTriangulo").value);
    const alturaTriangulo = Number(document.getElementById("alturaTriangulo").value);

    const triangulo = new Triangulo(baseTriangulo, alturaTriangulo);
    areaResT.innerText = triangulo.calcularArea();
})

formCirculo.addEventListener('submit', (event) => {
    event.preventDefault();
    const areaResC = document.getElementById("areaResC");
    const raio = Number(document.getElementById("raioCirculo").value);

    const circulo = new Circulo(raio)
    areaResC.innerText = circulo.calcularArea();
    console.log(areaResC)
})
