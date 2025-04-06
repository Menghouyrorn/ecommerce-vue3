<template>
  <div>
    <Card class="w-full rounded h-[290px] flex justify-center">
      <CardContent>
        <Skeleton class="w-[200px] mt-4 h-[160px]" v-if="isLoading" />
        <img class="w-full" :src="image_product" />
        <div class="space-y-4">
          <p>{{ product_data.title }}</p>
          <div class="flex justify-between items-center">
            <p class="text-red-500">{{ product_data.price }} $</p>
            <Button size="icon" variant="ghost">
              <ShoppingCart color="black" :size="3200" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/index.js";
import { Button } from "@/components/ui/button/index.js";
import { ShoppingCart } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import Skeleton from "./ui/skeleton/Skeleton.vue";

const props = defineProps({
  product_data: {
    type: Object,
    required: true,
  },
});
let image_product = ref("");
let isLoading = ref(true);

const check_loading = async (url: any) => {
  const img = new Image();
  img.src = url;
  await new Promise((res) => (img.onload = res));
  setTimeout(() => {
    isLoading.value = false;
    image_product.value = img.src;
  }, 1000);
};
onMounted(() => {
  check_loading(props.product_data.url);
});
</script>
