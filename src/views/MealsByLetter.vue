<template>
  <div class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <div>
    <!-- <pre>{{ meals }}</pre> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
      <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

import MealItem from "../components/MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
<style></style>
