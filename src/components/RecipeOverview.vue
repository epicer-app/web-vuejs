<template>
    <section class="recipe-overview">
        <h1>{{mainRecipeName}}</h1>
        <h2 v-if="withRecipeName">with {{withRecipeName}}</h2>
    </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RecipeOverview extends Vue {
    get mainRecipeName() {
        return this.$store.state.recipe.mainRecipe.name;
    }
    get withRecipeName() {
        return this.$store.state.recipe.withRecipe.name;
    }
}

</script>