// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const estados = [
  {
    nome: "SP",
    valor: 67836.43
  },
  {
    nome: "RJ", 
    valor : 36678.66
  },
  {
    nome: "MG",
    valor : 29229.88
  },
  {
    nome: "ES",
    valor : 27165.48
  },
  {
    nome: "Outros",
    valor: 19849.53
  }
]
let valorTotal = 0;
for (estado of estados){
  valorTotal += estado.valor;
}
let porcentagemTotal = 0;
for (estado of estados){
  const porcentagem = (100 * estado.valor)/valorTotal;
  console.log(`O estado ${estado.nome} representa ${porcentagem.toFixed(2)} `)
   porcentagemTotal += porcentagem;
}
