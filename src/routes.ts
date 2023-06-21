import { Router } from 'express';
import { MercadoriaController } from './controllers/MercadoriaController';

const routes = Router();
const MercadoriaController_ = new MercadoriaController();

routes.get('/orderby/enquadramento', MercadoriaController_.orderByEnquadramento);
routes.get('/sum/local-embarque', MercadoriaController_.sumLocalEmbarque);
routes.get('/sum/condicao-venda', MercadoriaController_.sumCondicaoVenda);
routes.get('/groupby', MercadoriaController_.groupBy);
routes.get('/distinct', MercadoriaController_.distinctNCM);

export default routes;
