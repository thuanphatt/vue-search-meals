<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-[#87805E]">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap gap-2 justify-center mt-2 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-3 h-3 flex items-center justify-center hover:text-[#87805E] hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>
  <div>
    <meals :meals="meals" />
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

import Meals from "../components/Meals.vue";

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
