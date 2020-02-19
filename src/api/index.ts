import falcor, { PathSet, JSONGraph, JSONGraphEnvelope, Model } from 'falcor';
import HttpDataSource from 'falcor-http-datasource';
import { mockDataSource } from './mock';

// TODO: Load from config
const baseUrl = 'http://localhost:3000';
const epicerApiDataSource = new HttpDataSource(`${baseUrl}/model.json`);

export const model = new Model({
    source: epicerApiDataSource, // mockDataSource,
});

interface StringIndexable {
    [index: string]: any;
}

const removeMeta = (obj: StringIndexable): object => {
    return Object.keys(obj).reduce((acc, key) => {
        if (key.startsWith('$') === false) {
            if (typeof obj[key] === 'object') {
                acc[key] = removeMeta(obj[key]);
            } else {
                acc[key] = obj[key];
            }
        }
        return acc;
    }, {} as StringIndexable);
};

export const api = {
    async get(...pathSets: Array<string|PathSet>): Promise<any> {
        const {json} = await model.get(...pathSets);
        const clean = removeMeta(json);
        return clean;
    },
};
