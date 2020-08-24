export const todosMeses = [
  {
    n: 0,
    mes: 'Janeiro',
    abv: 'Jan.',
  },
  {
    n: 1,
    mes: 'Fevereiro',
    abv: 'Fev.',
  },
  {
    n: 2,
    mes: 'Março',
    abv: 'Mar.',
  },
  {
    n: 3,
    mes: 'Abril',
    abv: 'Abr.',
  },
  {
    n: 4,
    mes: 'Maio',
    abv: 'Mai.',
  },
  {
    n: 5,
    mes: 'Junho',
    abv: 'Jun.',
  },
  {
    n: 6,
    mes: 'Julho',
    abv: 'Jul.',
  },
  {
    n: 7,
    mes: 'Agosto',
    abv: 'Ago.',
  },
  {
    n: 8,
    mes: 'Setembro',
    abv: 'Set.',
  },
  {
    n: 9,
    mes: 'Outubro',
    abv: 'Out.',
  },
  {
    n: 10,
    mes: 'Novembro',
    abv: 'Nov.',
  },
  {
    n: 11,
    mes: 'Dezembro',
    abv: 'Dez.',
  },
];

export const diasDaSemana = [
  {
    n: 0,
    extenso: 'Domingo',
    abv: 'Dom.',
  },
  {
    n: 1,
    extenso: 'Segunda-feira',
    abv: 'Seg.',
  },
  {
    n: 2,
    extenso: 'Terça-feira',
    abv: 'Ter.',
  },
  {
    n: 3,
    extenso: 'Quarta-feira',
    abv: 'Qua.',
  },
  {
    n: 4,
    extenso: 'Quinta-feira',
    abv: 'Qui.',
  },
  {
    n: 5,
    extenso: 'Sexta-feira',
    abv: 'Sex.',
  },
  {
    n: 6,
    extenso: 'Sábado',
    abv: 'Sáb.',
  },
]

export function obterMes(mes: number) {
  return todosMeses.find(it => it.n === mes);
}

export function obterDiaDaSemana(dia: number) {
  return diasDaSemana.find(it => it.n === dia);
}
