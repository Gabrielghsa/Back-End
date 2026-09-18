export default class Agenda{
    constructor(){
        this.listaDeContatos = [];
    }

    exibirLista(){
        this.listaDeContatos.forEach((elemento) => {
            console.log(`Nome do contato ${elemento.nome}, telefone ${elemento.telefone}`)
        })
    }

    adicionarContato(contato){
        this.listaDeContatos.push(contato);
    }

    removerContato(telefone){
        const indice = this.listaDeContatos.findIndex(contato => contato.telefone === telefone)
        if(indice !== -1){
            this.listaDeContatos.splice(indice, 1)
        }
    }

    buscarContato(telefone){
        const contatoProc = this.listaDeContatos.find(contato => contato.telefone === telefone)
        if(contatoProc){
            console.log(contatoProc.nome)
        }
    }
}