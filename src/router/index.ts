import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }, {
    path: '/recipe/:recipeId',
    name: 'recipe',
    component: Recipe,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
