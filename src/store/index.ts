import Vue from 'vue';
import Vuex from 'vuex';

import { recipe } from './recipe';
import { popularRecipes } from './popular';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
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
