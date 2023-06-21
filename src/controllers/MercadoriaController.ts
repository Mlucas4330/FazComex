import { Request, Response } from 'express';
import { MercadoriaRepository } from '../repositories/MercadoriaRepository';
import { MercadoriaService } from '../services/MercadoriaService';

export class MercadoriaController {
    orderByEnquadramento(req: Request, res: Response) {
        try {
            const due_itens = new MercadoriaRepository().findAll();
            const value = new MercadoriaService().orderby(due_itens, 'enquadramento1');
            res.send({
                message: 'ok',
                value
            });
        } catch (error: any) {
            res.status(500).send({
                message: error
            });
        }
    }

    sumLocalEmbarque(req: Request, res: Response) {
        try {
            const due_itens = new MercadoriaRepository().findAll();
            const value = new MercadoriaService().sum(due_itens, 'valor_merc_local_embarque');
            res.send({
                message: 'ok',
                value
            });
        } catch (error: any) {
            res.status(500).send({
                message: error
            });
        }
    }

    sumCondicaoVenda(req: Request, res: Response) {
        try {
            const due_itens = new MercadoriaRepository().findAll();
            const value = new MercadoriaService().sum(due_itens, 'valor_merc_condicao_venda');

            res.send({
                message: 'ok',
                value
            });
        } catch (error: any) {
            res.status(500).send({
                message: error
            });
        }
    }

    groupBy(req: Request, res: Response) {
        try {
            const due_itens = new MercadoriaRepository().findAll();
            const value = new MercadoriaService().groupby(due_itens);
            res.send({
                message: 'ok',
                value
            });
        } catch (error: any) {
            res.status(500).send({
                message: error
            });
        }
    }

    distinctNCM(req: Request, res: Response) {
        try {
            const due_itens = new MercadoriaRepository().findAll();
            const value = new MercadoriaService().distinct(due_itens, 'ncm');
            res.send({
                message: 'ok',
                value
            });
        } catch (error: any) {
            res.status(500).send({
                message: error
            });
        }
    }
}
