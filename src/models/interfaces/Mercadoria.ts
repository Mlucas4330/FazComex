export interface Mercadoria {
    item: number;
    nfe_chave: string;
    nfe_item: number;
    ncm: string;
    valor_merc_local_embarque: number;
    valor_merc_condicao_venda: number;
    peso_liquido: number;
    enquadramento1: string;
    enquadramento2: null;
    enquadramento3: null;
    enquadramento4: null;
    descricao_complementar: string;

    [key: string]: any;
}
