<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
