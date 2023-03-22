<template>
  <div class="p-8 pb-0 bg-transparent">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import MealItem from "../components/MealItem.vue";

const keyword = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
<style></style>
