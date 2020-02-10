<template>
    <ul class="ingredient-list">
        
    </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue} from 'vue-property-decorator';
import { IRecipe } from '../store/recipeList';

@Component
export default class IngredientList extends Vue {
    get recipe() {
        return this.$store.state.currentRecipe;
    }
    @Prop() private recipeId!: IRecipe;

}
</script>