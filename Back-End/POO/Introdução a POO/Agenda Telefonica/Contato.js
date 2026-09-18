export default class Contato{
    constructor(nome, telefone){
        this.nome = nome;
        this.telefone = telefone;
    }

    exibirContato(){
        return `Nome: ${this.nome} | Telefone: ${this.telefone}`;
    }

     alterarTelefone(novoTelefone) {
        this.telefone = novoTelefone;
    }

    alterarNome(novoNome) {
        this.nome = novoNome;
    }
}