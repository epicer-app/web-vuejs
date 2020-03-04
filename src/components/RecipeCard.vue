<template>
<div class="recipe-card">
    <router-link :to="{name: `recipe`, params: {recipeId: recipe.id}}">
        <h1>{{name}}</h1>
    </router-link>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class RecipeCard extends Vue {
    get name() {
        return this.recipe.name;
    }
    @Prop() private recipe!: any;
}
</script>