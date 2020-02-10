import { PathSet } from 'falcor';

export const ref = (path: PathSet) => ({$type: 'ref', value: path});
