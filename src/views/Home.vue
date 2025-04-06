<template>
  <div>
    <div class="w-full grid grid-cols-6 gap-4">
      <div v-for="item in last_data" :key="item.id">
        <ProductCard :product_data="item" :key="item.id" />
      </div>
    </div>
    <div class="flex justify-center mt-40" v-if="last_data.length == 0">
      <Notfound />
    </div>
  </div>
</template>

<script setup>
import { product_data } from "@/store/data/index.ts";
import ProductCard from "@/components/product-card.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import Notfound from "@/components/Notfound.vue";

const route = useRoute();

const last_data = ref([]);

function search_data(data) {
  last_data.value = data
    ? product_data.filter((v) =>
        v.title.toLowerCase().includes(data.search_data.toLowerCase())
      )
    : product_data;
}

onMounted(() => {
  const check = Object.keys(route.query).length == 0;
  if (check || !route.query.search_data) {
    last_data.value = product_data;
  }
});

watch(
  () => route.query,
  (new_val) => {
    search_data(new_val);
  }
);
</script>
