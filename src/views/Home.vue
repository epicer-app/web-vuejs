<template>
  <div class="home">
    <PopularRecipes v-bind:recipes="popularRecipes"></PopularRecipes>
  </div>
</template>

<script>
import PopularRecipes from '@/components/PopularRecipes.vue';

export default {
  name: 'home',
  components: {
    PopularRecipes,
  },
  computed: {
    popularRecipes() {
      return this.$store.state.recipeList.popularRecipes;
    },
  },
};
</script>
