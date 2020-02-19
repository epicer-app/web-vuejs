<template>
    <div class="popular-recipes">
        <RecipeCard v-for="recipe in recipes" v-bind:key="recipe.id" v-bind:recipe="recipe"></RecipeCard>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RecipeCard from './RecipeCard.vue';

@Component({
    components: {
        RecipeCard,
    },
})
export default class PopularRecipes extends Vue {
    get recipes() {
        return this.$store.state.popularRecipes.recipes;
    }

    protected mounted() {
        this.$store.dispatch('fetchPopularRecipes');
    }
}
</script>