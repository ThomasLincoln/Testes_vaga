
const valores = [
  {
    diaSemana: true,
    valor: 300,
  },
  {
    diaSemana: true,
    valor: 240,
  },
  {
    diaSemana: false,
    valor: 0,
  },
  {
    diaSemana: true,
    valor: 0,
  },
  {
    diaSemana: true,
    valor: 600,
  }, {
    diaSemana: true,
    valor: 10,
  },
  {
    diaSemana: true,
    valor: 500,
  },
  {
    diaSemana: true,
    valor: 100,
  }
]

let menor = valores[0].valor
let maior = valores[0].valor
let diasValidos = 0;
let rendaBruta = 0;

for(dia of valores){
  if(dia.valor != 0){
    diasValidos++;
    rendaBruta = rendaBruta + dia.valor;
  }
}

const media = rendaBruta / diasValidos;
console.log(`Sua média é: ${media.toFixed(2)}`)
let diasAcimaDaMedia = 0;
for (renda of valores) {
  // se a renda for diferente de 0 é pq naquele dia teve renda e é um dia valido
  if(renda.valor != 0){
    if(renda.valor > media){
    diasAcimaDaMedia ++;
    }
    if(renda.valor < menor){
      menor = renda.valor;
    }
    if(renda.valor > maior){
      maior = renda.valor;
    }
  }
}
console.log(`O pior dia foi: ${menor}`)
console.log(`O melhor dia foi: ${maior}`)
console.log(`Houveram ${diasAcimaDaMedia} dias acima da média`)


