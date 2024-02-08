export class Personagem {
  nome
  vida = 100
  mana = 100
  level
  tipo
  descricao

  constructor(nome, level, descricao){
    this.nome = nome
    this.level = level
    this.descricao = descricao
  }

  obterInsignia(){
    if(this.level >= 5){
      return `${ this.constructor.tipo } Implacavel!`;
    }
    return `${ this.constructor.tipo } Iniciante.`;
  }
   
  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return 'Empate!'
    }
    if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`      
    }
    return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`

  }
}