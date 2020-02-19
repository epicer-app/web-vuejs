import { api } from '@/api';

export const popularRecipes = {
    state: {
        recipes: [],
    },
    mutations: {
        setRecipes(state: any, recipes: any[]) {
            state.recipes = recipes;
        },
    },
    actions: {
        async fetchPopularRecipes(context: any, args: any) {
            const {popular: {length}} = await api.get(
                ['popular', 'length'],
            );
            const {popular: recipes} = await api.get(
                ['popular', {from: 0, to: length - 1 }, ['id', 'name']],
            );

            context.commit('setRecipes', Object.values(recipes));
        },
    },
};
