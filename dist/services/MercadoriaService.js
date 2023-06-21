"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoriaService = void 0;
class MercadoriaService {
    orderby(data, prop) {
        return data.sort((a, b) => {
            return parseInt(a[prop]) - parseInt(b[prop]);
        });
    }
    sum(data, prop) {
        const sum = data.reduce((acc, curr) => {
            return acc + curr[prop];
        }, 0);
        return { [prop]: sum };
    }
    groupby(data) {
        const groupedData = data.reduce((result, obj) => {
            const enquadramento = obj.enquadramento1;
            if (result[enquadramento]) {
                result[enquadramento].peso_liquido += obj.peso_liquido;
            }
            else {
                result[enquadramento] = {
                    enquadramento,
                    peso_liquido: obj.peso_liquido
                };
            }
            return result;
        }, {});
        return Object.values(groupedData);
    }
    distinct(data, prop) {
        const uniqueValues = new Set();
        return data.filter(obj => {
            if (!uniqueValues.has(obj[prop])) {
                uniqueValues.add(obj[prop]);
                return true;
            }
            return false;
        });
    }
}
exports.MercadoriaService = MercadoriaService;
