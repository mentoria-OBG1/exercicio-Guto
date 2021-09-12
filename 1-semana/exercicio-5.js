// Crie uma classe que contenha as propriedades de nome, sobrenome e idade, crie um método chamada saudação que mostrará no console "Olá,nome" usando Templates Literais

// Utilizando a mesma classe, crie um método para aumentar a idade, outra para diminuir a idade, ambas recebendo o valor como parâmetro.

// Crie um método que mostra no console "primeira idade", "segunda idade" ou "terceira idade" com base na propriedade de idade do objeto passada como parâmetro.

// Dica: primeira idade é menor de 30 anos, segunda idade é menor de 60 anos e terceira idade de 60 anos para cima.

class DadosPessoais {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  exibirNome() {
    console.log(`Olá ${this.nome}`);
  }

  aumentarIdade(num) {
    this.idade += num;
  }
  diminuirIdade(num) {
    this.idade -= num;
  }

  prioridadeIdade(){
      if(this.idade < 30) console.log("Primeira Idade");
      else if(this.idade >= 30 && this.idade <= 60) console.log("Segunda Idade");
      else log("Terceira Idade")
  }
}

let nome = new DadosPessoais("José", "Augusto", 43);
nome.exibirNome();
nome.prioridadeIdade();



