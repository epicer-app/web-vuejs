<template>
    <div class="recipe">
        <IngredientList :id="recipeId"></IngredientList>
    </div>
</template>

<script lang="ts">
import store from '@/store';
import IngredientList from '@/components/IngredientList.vue';

export default {
    name: 'recipe',
    components: {
        IngredientList,
    },
    computed: {
    },
    props: {
        recipeId: String,
    },
};
</script>