<template>
    <div class="popular-recipes">
        <RecipeCard v-for="recipe in recipes" v-bind:key="recipe.id" v-bind:recipe="recipe"></RecipeCard>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRecipe } from '../store/recipeList';
import RecipeCard from './RecipeCard.vue';

@Component({
    components: {
        RecipeCard,
    },
})
export default class PopularRecipes extends Vue {
    @Prop() private recipes!: IRecipe[];
}
</script>