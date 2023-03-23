<template>
  <div class="p-8 pb-0 bg-transparent">
    <h1 class="text-5xl font-bold mb-6 text-center text-[#0A2031]">
      Search Meals By Name
    </h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 w-full focus:border-[#0A2031]"
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
