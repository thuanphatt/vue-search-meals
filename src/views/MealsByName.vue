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
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
      <div class="px-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nulla autem saepe corporis numquam tempore? Quisquam facilis
        </p>
        <div>
          <a
            href="meal.strYoutube"
            target="_black"
            class="px-3 py-2 rounded border border-red-600"
            >Youtube</a
          >
          <router-link to="/">View</router-link>
        </div>
      </div>
    </div>
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
