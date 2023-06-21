"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoriaRepository = void 0;
const data_json_1 = __importDefault(require("../data/data.json"));
class MercadoriaRepository {
    findAll() {
        const { due_itens } = data_json_1.default;
        return due_itens;
    }
}
exports.MercadoriaRepository = MercadoriaRepository;
