<template>
  <div class="flex gap-x-4">
    <img :src="products.url" class="border" width="400" height="400" />
    <div class="space-y-4">
      <p class="font-bold text-4xl uppercase">{{ products.title }}</p>
      <p class="text-xl text-red-500">$ {{ products.price }}</p>
      <QtyProduct @product_qty="getQty" />
      <Button>Add To Cart</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { product_data } from "@/store/data";
import { computed, ref, watch } from "vue";
import Button from "@/components/ui/button/Button.vue";
import QtyProduct from "@/components/Qty-Product.vue";
const route = useRoute();
let product_qty = ref(1);
console.log(route.fullPath.split("/"));
function getQty(value: number) {
  product_qty.value = value;
}

const { value: products } = computed(() => {
  return product_data.find((v) => v.id == Number(route.params.id));
});
</script>
