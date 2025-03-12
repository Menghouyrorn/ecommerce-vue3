<template>
  <div class="h-[8vh] shadow w-full flex items-center justify-between pl-4 pr-4">
    <h1 class="uppercase text-xl font-bold">Ecommerce Shop</h1>
    <div>
      <SearchBar/>
    </div>
    <div class="flex items-center gap-x-4">
      <div>
        <Button variant="outline" class="text-xs uppercase">
          Cart
        </Button>
        <span class="relative -top-4 -left-1 text-green-500">0</span>
      </div>
      <div>
        <Button variant="outline" class="text-xs uppercase">Wish</Button>
        <span class="relative -top-4 -left-1 text-red-500">0</span>
      </div>
      <Button>
        Login
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Button} from "@/components/ui/button/index.js";
import SearchBar from "@/components/search-bar.vue";

</script>
