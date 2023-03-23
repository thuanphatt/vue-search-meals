<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full mb-2"
      placeholder="Search for ingredients..."
    />
    <h1 class="text-5xl font-bold mb-6 text-center">Ingredients</h1>
    <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient in computedIngredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-3 mb-3 shadow block"
    >
      <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
    </router-link>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => {
    return i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
<style></style>
