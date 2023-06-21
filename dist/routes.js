"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MercadoriaController_1 = require("./controllers/MercadoriaController");
const routes = (0, express_1.Router)();
routes.get('/orderby/enquadramento', new MercadoriaController_1.MercadoriaController().orderByEnquadramento);
routes.get('/sum/local-embarque', new MercadoriaController_1.MercadoriaController().sumLocalEmbarque);
routes.get('/sum/condicao-venda', new MercadoriaController_1.MercadoriaController().sumCondicaoVenda);
routes.get('/groupby', new MercadoriaController_1.MercadoriaController().groupBy);
routes.get('/distinct', new MercadoriaController_1.MercadoriaController().distinctNCM);
exports.default = routes;
