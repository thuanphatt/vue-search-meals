import { createRouter, createWebHistory } from "vue-router";

import DefaultLayOut from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealDetails from "../views/MealDetails.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import Ingredients from "../views/Ingredients.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayOut,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
