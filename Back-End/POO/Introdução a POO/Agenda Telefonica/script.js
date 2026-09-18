import Agenda from "./Agenda.js";
import Contato from "./Contato.js";

const agenda = new Agenda()

const contato1 = new Contato("Macrebs", "(31)98765-3456")
agenda.adicionarContato(contato1)
agenda.exibirLista()