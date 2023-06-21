import { Mercadoria } from '../../models/interfaces/Mercadoria';

export interface IMercadoriaService {
    orderby(data: Mercadoria[], prop: string): Mercadoria[];

    sum(data: Mercadoria[], prop: string): number;

    groupby(data: Mercadoria[]): unknown[];

    distinct(data: Mercadoria[], prop: string): Mercadoria[];
}
