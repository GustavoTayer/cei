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

export interface IProdutoCount {
  _id: string;
  produto: Produto[];
  count: number;
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

export enum EComunidadeUsuario {
  PROPEDEUTICO = 'Propedêutico',
  FILOSOFIA = 'Filosofia',
  TEOLOGIA = 'Teologia',
  TIROCINIO = 'Tirocinio',
}
export enum EHierarquiaUsuario {
  SEMINARISTA = 'Seminarista',
  FORMADOR = 'Formador',
  REITOR = 'Reitor',
}

export enum EEquipeUsuario {
  COMPRAS = 'Compras',
  REDES_SOCIAIS = 'Redes Sociais',
  JARDINAGEM = 'Jardinagem',
  PARTILHA_SOLIDARIA = 'Partilha solidária',
  PRODUTOS = 'Produtos',
  OUTROS = 'Outros',
}
