export interface User {
  _id: string;
  nome: string;
}

export interface Produto {
  _id?: string;
  nome: string;
  ativo?: boolean;
  descricao?: string;
  valor: number;
}

export interface IProdutosSolicitados {
  produto: Produto;
  quantidade: number;
  valor?: number;
}

export interface ISolicitacaoProduto {
  criadoEm?: Date;
  valorTotal?: number;
  dataDesejada?: Date;
  usuario?: User;
  status?: EStatusSolicitacao;
  produtos?: IProdutosSolicitados[];
}

export enum EStatusSolicitacao {
  ABERTO = 'ABERTO',
  PRODUZINDO = 'PRODUZINDO',
  ENTREGUE = 'ENTREGUE',
  PAGO = 'PAGO',
}
