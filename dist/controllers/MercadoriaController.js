"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoriaController = void 0;
const MercadoriaRepository_1 = require("../repositories/MercadoriaRepository");
const MercadoriaService_1 = require("../services/MercadoriaService");
class MercadoriaController {
    orderByEnquadramento(req, res) {
        try {
            const due_itens = new MercadoriaRepository_1.MercadoriaRepository().findAll();
            const value = new MercadoriaService_1.MercadoriaService().orderby(due_itens, 'enquadramento1');
            res.send({
                message: 'ok',
                value
            });
        }
        catch (error) {
            res.status(500).send({
                message: error
            });
        }
    }
    sumLocalEmbarque(req, res) {
        try {
            const due_itens = new MercadoriaRepository_1.MercadoriaRepository().findAll();
            const value = new MercadoriaService_1.MercadoriaService().sum(due_itens, 'valor_merc_local_embarque');
            res.send({
                message: 'ok',
                value
            });
        }
        catch (error) {
            res.status(500).send({
                message: error
            });
        }
    }
    sumCondicaoVenda(req, res) {
        try {
            const due_itens = new MercadoriaRepository_1.MercadoriaRepository().findAll();
            const value = new MercadoriaService_1.MercadoriaService().sum(due_itens, 'valor_merc_condicao_venda');
            res.send({
                message: 'ok',
                value
            });
        }
        catch (error) {
            res.status(500).send({
                message: error
            });
        }
    }
    groupBy(req, res) {
        try {
            const due_itens = new MercadoriaRepository_1.MercadoriaRepository().findAll();
            const value = new MercadoriaService_1.MercadoriaService().groupby(due_itens);
            res.send({
                message: 'ok',
                value
            });
        }
        catch (error) {
            res.status(500).send({
                message: error
            });
        }
    }
    distinctNCM(req, res) {
        try {
            const due_itens = new MercadoriaRepository_1.MercadoriaRepository().findAll();
            const value = new MercadoriaService_1.MercadoriaService().distinct(due_itens, 'ncm');
            res.send({
                message: 'ok',
                value
            });
        }
        catch (error) {
            res.status(500).send({
                message: error
            });
        }
    }
}
exports.MercadoriaController = MercadoriaController;
