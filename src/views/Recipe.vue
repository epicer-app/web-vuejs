<template>
    <section class="recipe">
        <RecipeOverview :recipeId="recipeId"></RecipeOverview>
        <IngredientList></IngredientList>
        <RecipeSteps></RecipeSteps>
    </section>
</template>

<script lang="ts">
import store from '@/store';
import Vue from 'vue';

import RecipeOverview from '@/components/RecipeOverview.vue';
import IngredientList from '@/components/IngredientList.vue';
import RecipeSteps from '@/components/RecipeSteps.vue';

export default Vue.extend({
    name: 'recipe',
    components: {
        RecipeOverview,
        IngredientList,
        RecipeSteps,
    },
    computed: {
    },
    props: {
        recipeId: String as () => string,
    },
    mounted() {
      store.dispatch('fetchRecipe', {recipeId: this.recipeId});
    },
});
</script>
<style>
h1 {
    font-size: 2em;
}
h2 {
    font-size: 1.8em;
}
h3 {
    font-size: 1.6em;
}
</style>