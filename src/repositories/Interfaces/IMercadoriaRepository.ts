import { Mercadoria } from '../../models/interfaces/Mercadoria';

export interface IMercadoriaRepository {
    findAll(): Mercadoria[];
}
