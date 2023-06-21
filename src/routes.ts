import { Router } from 'express';
import { MercadoriaController } from './controllers/MercadoriaController';

const routes = Router();

routes.get('/orderby/enquadramento', new MercadoriaController().orderByEnquadramento);
routes.get('/sum/local-embarque', new MercadoriaController().sumLocalEmbarque);
routes.get('/sum/condicao-venda', new MercadoriaController().sumCondicaoVenda);
routes.get('/groupby', new MercadoriaController().groupBy);
routes.get('/distinct', new MercadoriaController().distinctNCM);

export default routes;
