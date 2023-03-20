<template lang="">
  <div class="p-8">
    <input
      type="text"
      :v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>
  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};
</script>
<style lang=""></style>
