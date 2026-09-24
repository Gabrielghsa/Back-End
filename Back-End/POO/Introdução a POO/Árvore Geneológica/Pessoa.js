class Pessoa{
    constructor(nome, idade, pai, mae){
        this.nome = nome;
        this.idade = idade;
        this.pai = pai;
        this.mae = mae;
        
    }

    exibirArvore(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Nome do pai: ${this.pai.nome}`);
        console.log(`Nome da mãe: ${this.mae.nome}`);
        console.log(`Nome do avô por parte do pai: ${this.pai.pai.nome}`);
        console.log(`Nome da avó por parte do pai: ${this.pai.mae.nome}`);
        console.log(`Nome do avô por parte da mãe: ${this.mae.pai.nome}`);
        console.log(`Nome da avó por parte do mãe: ${this.mae.mae.nome}`);
    }

}
const paiDoPai = new Pessoa("Pedro", 90, "João", "Maria")
const maeDoPai = new Pessoa("Paula", 78, "José", "Joana")
const pai = new Pessoa("Macrebs", 49, paiDoPai, maeDoPai)

const paiDaMae = new Pessoa("Iago", 99, "Yara", "Yuno")
const maeDaMae = new Pessoa("Josefa", 91, "Mario", "Mariana")
const mae = new Pessoa("Juriscleia", 50, paiDaMae, maeDaMae)

const filho = new Pessoa("Macrebinho", 20, pai, mae)

filho.exibirArvore()