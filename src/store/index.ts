import Vue from 'vue';
import Vuex from 'vuex';

import { recipe } from './recipe';
import { popularRecipes } from './popular';

import { IApplicationState } from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  } as IApplicationState,
  mutations: {
  },
  actions: {
  },
  modules: {
    // recipeList,
    recipe,
    popularRecipes,
  },
});
