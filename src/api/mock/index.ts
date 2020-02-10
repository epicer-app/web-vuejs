import { Model } from 'falcor';

import { popular } from './popular';
import { recipesById } from './recipes';

export const mockDataSource = new Model({
    cache: {
        popular,
        recipesById,
    },
}).asDataSource();
