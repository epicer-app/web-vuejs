import { api } from '@/api';
import { ActionContext } from 'vuex';
import { IApplicationState } from './types';

export interface IPopularRecipe {
    id: string;
    name: string;
}

export interface IPopularRecipesState {
    recipes: IPopularRecipe[];
}

type PopularRecipesContext = ActionContext<IPopularRecipesState, IApplicationState>;

export const popularRecipes = {
    state: {
        recipes: [],
    } as IPopularRecipesState,

    mutations: {
        setRecipes(state: IPopularRecipesState, recipes: IPopularRecipe[]) {
            state.recipes = recipes;
        },
    },

    actions: {
        async fetchPopularRecipes(context: PopularRecipesContext): Promise<void> {
            const {popular: {length}} = await api.get(
                ['popular', 'length'],
            );

            const {popular: recipes} = await api.get(
                ['popular', {from: 0, to: length - 1 }, ['id', 'name']],
                ['popular', {from: 0, to: length - 1 }, 'with', ['id', 'name']],
            );

            const popularRecipeList: IPopularRecipe[] = Object.values(recipes).map((recipe: any) => {
                let recipeName = recipe.name;
                if (recipe.with.name) {
                    recipeName = `${recipeName} with ${recipe.with.name}`;
                }
                return {
                    id: recipe.id,
                    name: recipeName,
                };
            });

            context.commit('setRecipes', popularRecipeList);
        },
    },
};
