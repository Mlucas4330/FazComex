import { Request, Response } from 'express';
import { IMercadoriaRepository } from '../repositories/Interfaces/IMercadoriaRepository';
import { IMercadoriaService } from '../services/Interfaces/IMercadoriaService';
import { MercadoriaRepository } from '../repositories/MercadoriaRepository';
import { MercadoriaService } from '../services/MercadoriaService';

export class MercadoriaController {
    private mercadoriaRepository: IMercadoriaRepository;
    private mercadoriaService: IMercadoriaService;

    constructor() {
        this.mercadoriaRepository = new MercadoriaRepository();
        this.mercadoriaService = new MercadoriaService();
    }
    orderByEnquadramento(req: Request, res: Response) {
        const due_itens = this.mercadoriaRepository.findAll();
        res.send(this.mercadoriaService.orderby(due_itens, 'enquadramento1'));
    }

    sumLocalEmbarque(req: Request, res: Response) {
        const due_itens = this.mercadoriaRepository.findAll();
        res.send(this.mercadoriaService.sum(due_itens, 'valor_merc_local_embarque'));
    }

    sumCondicaoVenda(req: Request, res: Response) {
        const due_itens = this.mercadoriaRepository.findAll();
        res.send(this.mercadoriaService.sum(due_itens, 'valor_merc_condicao_venda'));
    }

    groupBy(req: Request, res: Response) {
        const due_itens = this.mercadoriaRepository.findAll();
        res.send(this.mercadoriaService.groupby(due_itens));
    }

    distinctNCM(req: Request, res: Response) {
        const due_itens = this.mercadoriaRepository.findAll();
        res.send(this.mercadoriaService.distinct(due_itens, 'ncm'));
    }
}
