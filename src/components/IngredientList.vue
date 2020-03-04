<template>
<section>
    <h3 v-if="withName">For the {{mainName}}</h3>
    <ul class="ingredient-list">
        <li v-for="ingredient in mainIngredients" v-bind:key="ingredient.name">
            {{ingredient.text}}
        </li>
    </ul>
    <h3 v-if="withName">For the {{withName}}</h3>
    <ul v-if="withName" class="ingredient-list">
        <li v-for="ingredient in withIngredients" v-bind:key="ingredient.name">
            {{ingredient.text}}
        </li>
    </ul>
</section>
</template>

<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import {decimalToFraction} from '@/converters';

@Component
export default class IngredientList extends Vue {
    get mainName() {
        return this.$store.state.recipe.mainRecipe.name;
    }
    get mainIngredients() {
        const ingredients = this.$store.state.recipe.mainRecipe.ingredients || [];
        const list = ingredients.map((i: any) => ({
            name: i.name,
            text: `${decimalToFraction(i.amount)} ${i.measure ? i.measure : ''} ${i.name}`,
        }));
        return list;
    }

    get withName() {
        return this.$store.state.recipe.withRecipe.name;
    }
    get withIngredients() {
        const ingredients = this.$store.state.recipe.withRecipe.ingredients || [];
        return ingredients.map((i: any) => ( {
            name: i.name,
            text: `${decimalToFraction(i.amount)} ${i.measure || ''} ${i.name}`,
        }));
    }
}
</script>