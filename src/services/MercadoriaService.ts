import { Mercadoria } from '../models/interfaces/Mercadoria';

export class MercadoriaService {
    orderby(data: Mercadoria[], prop: string) {
        return data.sort((a: Mercadoria, b: Mercadoria) => {
            return parseInt(a[prop]) - parseInt(b[prop]);
        });
    }

    sum(data: Mercadoria[], prop: string) {
        const sum = data.reduce((acc, curr) => {
            return acc + curr[prop];
        }, 0);

        return { [prop]: sum }
    }

    groupby(data: Mercadoria[]) {
        const groupedData = data.reduce((result, obj) => {
            const enquadramento = obj.enquadramento1;

            if (result[enquadramento]) {
                result[enquadramento].peso_liquido += obj.peso_liquido;
            } else {
                result[enquadramento] = {
                    enquadramento,
                    peso_liquido: obj.peso_liquido
                };
            }

            return result;
        }, {} as any);

        return Object.values(groupedData);
    }

    distinct(data: Mercadoria[], prop: string) {
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
