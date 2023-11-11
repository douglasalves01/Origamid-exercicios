//crie um objeto com os dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome
const dadosPessoas = {
  nome: "Douglas",
  sobrenome: "Alves",
  idade: "58",
  cidade: "Saõ Paulo",
};

//crie um metodo no objeto anterior, que mostre o nome completo
dadosPessoas.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
//modifique o valor da propriedade preco para 3000
const carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
//crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late
//ao ver um homem
const cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") return "Latir";
    else return "nada";
  },
};
