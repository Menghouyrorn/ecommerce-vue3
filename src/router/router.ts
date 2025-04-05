import { router_data } from "@/store/data/route-data";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: router_data,
});

export { router };
