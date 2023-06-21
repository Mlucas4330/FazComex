import data from '../data/data.json';
import { Mercadoria } from '../models/interfaces/Mercadoria';
import { IMercadoriaRepository } from './Interfaces/IMercadoriaRepository';

export class MercadoriaRepository implements IMercadoriaRepository {
    findAll(): Mercadoria[] {
        const { due_itens } = data;
        return due_itens;
    }
}
