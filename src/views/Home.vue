<template>
  <div class="grid grid-cols-6 gap-4">
    <div v-for="item in product_data">
      <ProductCard :product_data="item" :key="item.id"/>
    </div>
  </div>
</template>

<script setup>
import {product_data} from "@/store/data/index.ts";
import ProductCard from "@/components/product-card.vue";
</script>
