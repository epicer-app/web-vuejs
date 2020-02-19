<template>
<section>
    <h3 v-if="withName">Make the {{mainName}}</h3>
    <ol class="recipe-steps">
        <li v-for="step in mainSteps" v-bind:key="step.index">
            {{step.text}}
        </li>
    </ol>
    <h3 v-if="withName">Make the {{withName}}</h3>
    <ol v-if="withName" class="recipe-steps">
        <li v-for="step in withSteps" v-bind:key="step.index">
            {{step.text}}
        </li>
    </ol>
</section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RecipeSteps extends Vue {
    get mainName() {
        return this.$store.state.recipe.mainRecipe.name;
    }
    get mainSteps() {
        const steps = this.$store.state.recipe.mainRecipe.steps || [];
        return steps.map((step: any, x: number) => (
            {text: step.description, index: x}
        ));
    }

    get withName() {
        return this.$store.state.recipe.withRecipe.name;
    }
    get withSteps() {
        const steps = this.$store.state.recipe.withRecipe.steps || [];
        return steps.map((step: any, x: number) => (
            {text: step.description, index: x}
        ));
    }
}
</script>