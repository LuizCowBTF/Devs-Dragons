import { Personagem } from "../../modules/personagem.js";
import { PersonagemView } from "../../components/personagem-view.js";
import { Mago } from "../../modules/mago.js";

const personagemPedrinho = new Personagem('Pedrinho', 13, 'Mago', '')
const personagemJose = new Personagem('José', 10, 'Arqueiro', '')

const personagens = [personagemJose, personagemPedrinho]

console.log(new Mago('Gelo', 7, 9))

new PersonagemView(personagens).render()