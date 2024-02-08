import { Personagem } from "../../modules/personagem.js";

/*
const personagemPedrinho = {
    nome: 'Pedrinho',
    vida: 7,
    mana: 12,
    level: 5,
    tipo: 'Mago',
}

const personagemJose = {
    nome: 'Jose',
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

const personagemAna = {
  nome: 'Ana',
  vida: 7,
  mana: 10,
  level: 5,
  tipo: 'Maga',
}
*/



const personagemPedrinho = new Personagem();
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.vida = 12
personagemPedrinho.mana = 12
personagemPedrinho.level = 5
personagemPedrinho.tipo = 'Mago'
personagemPedrinho.descricao = ''


const personagemJose = new Personagem();
personagemJose.nome = 'José'
personagemJose.vida = 10
personagemJose.mana = 10
personagemJose.level = 4
personagemJose.tipo = 'Arqueiro'
personagemJose.descricao = ''


const personagemPatalogica = new Personagem();
personagemPatalogica.nome = 'Ana'
personagemPatalogica.vida = 15
personagemPatalogica.mana = 15
personagemPatalogica.level = 7
personagemPatalogica.tipo = 'Maga'
personagemPatalogica.descricao = ''


console.log('Insignia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia());
console.log('Insignia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia());
console.log('Insignia de ' + personagemPatalogica.nome + ': ' + personagemPatalogica.obterInsignia());

