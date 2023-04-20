<template lang="">
  <div class="max-w-[800px] mx-auto p-8">
    <!-- <pre>{{ meal }}</pre> -->
    <h1 class="text-2xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2 w-full">
      <div>
        <strong class="font-bold">Category :</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area :</strong> {{ meal.strArea }}</div>
      <div
        class="whitespace-nowrap overflow-hidden overflow-ellipsis 2xl:w-fit"
      >
        <strong class="font-bold">Tags :</strong>
        {{ meal.strTags }}
      </div>
    </div>
  </div>
  <div class="px-8 py-3">
    {{ meal.strInstructions }}
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 p-8">
    <div>
      <h2 class="text-2xl font-semibold mb-1">Ingredients</h2>
      <ul>
        <template v-for="(item, index) of new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-1">Measures</h2>
      <ul>
        <template v-for="(item, index) of new Array(20)">
          <li v-if="meal[`strMeasure${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div class="mt-4 flex">
      <youtube-button :href="meal.strYoutube" class="flex w-50"
        >Go to Youtube</youtube-button
      >

      <a
        :href="meal.strSource"
        target="_black"
        class="ml-3 px-4 py-1 w-50 inline-flex items-center justify-between rounded text-[#87805E] hover:text-blue-600 transition-colors"
      >
        <span class="m-0 p-0 mb[-4px]"> View Original Source </span>
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const meal = ref({});
const route = useRoute();
axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
  meal.value = data.meals[0] || {};
});
</script>
<style lang=""></style>
