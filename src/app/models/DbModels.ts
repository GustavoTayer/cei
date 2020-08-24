export interface User {
  _id: string;
  nome: string;
}

export interface IUsuario {
  name: string;
  _id: string;
  email: string;
  paroquia?: string;
  passagem?: number;
}

export interface Equipe {
  _id?: string;
  nome: string;
  descricao?: string;
  membros?: User[];
  cargos?: Cargo[];
  permissoes?: PermissoesEquipe[];
}
export interface PermissoesEquipe {
  _id: string;
  nome: string;
  descricao: string;
}

export interface Cargo {
  nome: string;
  descricao?: string;
  permissoes?: string[];
  equipe: string;
}

export interface Produto {
  _id?: string;
  nome: string;
  ativo?: boolean;
  descricao?: string;
  valor: number;
  cor: string;
}

export interface IProdutoCount {
  _id: string;
  produto: Produto[];
  count: number;
}

export interface IAdiantamento {
  usuario: IUsuario;
  criadoPor?: IUsuario;
  data: Date;
  justificativa: string;
  valor: number;
  descontado: boolean;
  dataDescontado?: boolean;
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
  ABERTO = 'Aberto',
  PRODUZINDO = 'Produzindo',
  ENTREGUE = 'Entregue',
  PAGO = 'Pago',
  CANCELADO = 'Cancelado',
  SLC_CANCELAMENTO = 'Slc. Canc.',
}

export enum EComunidadeUsuario {
  PROPEDEUTICO = 'Propedêutico',
  FILOSOFIA = 'Filosofia',
  TEOLOGIA = 'Teologia',
  TIROCINIO = 'Tirocínio',
}
export enum EHierarquiaUsuario {
  SEMINARISTA = 'Seminarista',
  FORMADOR = 'Formador',
  REITOR = 'Reitor',
  CONSELHO_GESTOR = 'Conselho Gestor',
  OUTROS = 'Outros',
}

export enum EStatusPartilha {
  EM_ANALISE = 'Em análise',
  CORRECAO = 'Solicitado correção',
  APROVADO = 'Aprovado',
  DEPOSITADO = 'Depositado',
}

export enum EEquipeUsuario {
  COMPRAS = 'Compras',
  REDES_SOCIAIS = 'Redes Sociais',
  JARDINAGEM = 'Jardinagem',
  PARTILHA_SOLIDARIA = 'Partilha solidária',
  PRODUTOS = 'Produtos',
  OUTROS = 'Outros',
}
