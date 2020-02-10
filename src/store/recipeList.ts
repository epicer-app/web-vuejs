import { api, model } from '@/api';

export interface IRecipeOverview {
    id: string;
    name: string;
}

export interface IRecipeListState {
    popularRecipes: IRecipeOverview[];
}

export interface IRecipe {
    name: string;
    with: IRecipe;
}

export type IPopularRecipes = IRecipe[];

export const recipeList = {
    state: {
        popularRecipes: [] as IRecipeOverview[],
    },
    mutations: {
        popularRecipes(state: any, recipes: []) {
            state.popularRecipes = recipes;
        },
    },
    actions: {
        async fetchPopularRecipes(context: any, args: any) {
            const {popular} = await api.get(
                ['popular', {from: 0, to: args.count}, ['id', 'name']],
                ['popular', {from: 0, to: args.count}, 'with', 'name'],
            );

            const results = Object.entries(popular)
                .map(([id, entry]: [string, any]) => ({id, ...entry}));

            // const results = [] as IRecipeOverview[];
            context.commit('popularRecipes', popular);
        },
    },
    getters: {

    },
};
