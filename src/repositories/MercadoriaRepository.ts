import data from '../data/data.json';
import { Mercadoria } from '../models/interfaces/Mercadoria';

export class MercadoriaRepository {
    findAll(): Mercadoria[] {
        const { due_itens } = data;
        return due_itens;
    }
}
