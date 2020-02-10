<template>
    <div class="recipe-card">
        <router-link :to="{name: `recipe`, params: {recipeId: recipe.id}}">
            <h1>{{name}}</h1>
        </router-link>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import { IRecipe } from '../store/recipeList';

@Component
export default class RecipeCard extends Vue {
    get name() {
        let name = this.recipe.name;
        if (this.recipe.with) {
            name += ' with ' + this.recipe.with.name;
        }
        return name;
    }
    @Prop() private recipe!: IRecipe;
}
</script>