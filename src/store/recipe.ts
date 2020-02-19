import { api } from '@/api';
import { deepMerge } from '@/utilities';

const convertObject = (obj: any) => Object.entries(obj).map(([id, entry]: [string, any]) => ({id, ...entry}));


const fetchRecipe = async (recipeId: string) => {
    const {recipesById} = await api.get(
        ['recipesById', recipeId, 'name'],
        ['recipesById', recipeId, 'ingredients', 'length'],
        ['recipesById', recipeId, 'steps', 'length'],

        ['recipesById', recipeId, 'with', ['name']],
        ['recipesById', recipeId, 'with', 'ingredients', 'length'],
        ['recipesById', recipeId, 'with', 'steps', 'length'],
    );
    return recipesById;
};

const fetchIngredients = async (recipeId: string, mainCount: number, withCount: number) => {
    const {recipesById} = await api.get(
        ['recipesById', recipeId, 'ingredients', {from: 0, to: mainCount - 1}, ['name', 'measure', 'amount']],
        ['recipesById', recipeId, 'with', 'ingredients', {from: 0, to: withCount - 1}, ['name', 'measure', 'amount']],
    );
    recipesById[recipeId].ingredients = Object.values(recipesById[recipeId].ingredients);
    recipesById[recipeId].with.ingredients = Object.values(recipesById[recipeId].with.ingredients);
    return recipesById;
};

const fetchSteps = async (recipeId: string, mainCount: number, withCount: number) => {
    const {recipesById} = await api.get(
        ['recipesById', recipeId, 'steps', {from: 0, to: mainCount - 1}, ['description']],
        ['recipesById', recipeId, 'with', 'steps', {from: 0, to: withCount - 1}, ['description']],
    );
    recipesById[recipeId].steps = Object.values(recipesById[recipeId].steps);
    recipesById[recipeId].with.steps = Object.values(recipesById[recipeId].with.steps);
    return recipesById;
};

export const recipe = {
    state: {
        mainRecipe: {},
        withRecipe: {},
        recipeOverview: {},

    },
    mutations: {
        mainRecipe(state: any, theRecipe: any) {
            state.mainRecipe = theRecipe;
        },
        includeRecipe(state: any, theRecipe: any) {
            state.withRecipe = theRecipe;
        },
        recipeOverview(state: any, recipeOverview: any) {
            state.recipeOverview = recipeOverview;
        },
    },
    actions: {
        async fetchRecipe(context: any, args: any) {
            const id = args.recipeId;
            const theRecipe = await fetchRecipe(args.recipeId);
            const r = theRecipe[id];
            const theIngredients = await fetchIngredients(id, r.ingredients.length, r.with.ingredients.length);
            const theSteps = await fetchSteps(id, r.steps.length, r.with.steps.length);

            const mainRecipe = deepMerge(theRecipe[id], theIngredients[id], theSteps[id]);

            context.commit('mainRecipe', mainRecipe);
            context.commit('includeRecipe', mainRecipe.with);
        },
        async fetchIngredientList(context: any, args: any) {
            const {recipesById} = await api.get(
                ['recipesById', args.recipeId, 'ingredients', {from: 0, to: 100}, ['name', 'amount', 'measure']],
                [
                    'recipesById',
                    args.recipeId,
                    'with',
                    'ingredients',
                    {from: 0, to: 100},
                    ['name', 'amount', 'measure'],
                ],
            );
            const fetchedRecipe = Object.entries(recipesById)
                .map(([id, entry]: [string, any]) => ({id, ...entry}));

            context.commit('activeRecipe', fetchedRecipe[0]);
        },
        async fetchRecipeOverview(context: any, args: any) {
            const {recipesById} = await api.get(
                ['recipesById', args.recipeId, 'name'],
                ['recipesById', args.recipeId, 'with', 'name'],
            );
            const fetchedRecipe = Object.entries(recipesById)
                .map(([id, entry]: [string, any]) => ({id, ...entry}));
            context.commit('recipeOverview', fetchedRecipe[0]);
        },
    },
    getters: {

    },
};
