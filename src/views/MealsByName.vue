<template>
  <div class="p-8 pb-0 bg-transparent">
    <h1 class="text-4xl font-bold mb-6 text-center text-[#87805E]">
      Search Meals By Name
    </h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full focus:border-[#87805E] focus:ring-[#87805E]"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import Meals from "../components/Meals.vue";

const keyword = ref("");
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
};
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
<style></style>
