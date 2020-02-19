<template>
  <div class="home">
    <PopularRecipes v-bind:recipes="popularRecipes"></PopularRecipes>
  </div>
</template>

<script>
import Vue from 'vue';
import store from '@/store';
import PopularRecipes from '@/components/PopularRecipes.vue';

export default Vue.extend({
  name: 'home',
  components: {
    PopularRecipes,
  },
  computed: {
    popularRecipes() {
      return this.$store.state.popularRecipes.recipes;
    },
  },
  mounted() {
    store.dispatch('fetchPopularRecipes');
  },
});
</script>
