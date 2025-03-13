<template>
  <div>
    <Card class="w-full rounded h-[290px] flex justify-center ">
      <CardContent>
        <img class="w-full" :src="product_data.url" alt="Image Logo">
        <div class="space-y-4">
          <p>{{ product_data.title }}</p>
          <div class="flex justify-between items-center">
            <p class="text-red-500">{{ product_data.price }} $</p>
            <Button size="icon" variant="ghost">
              <ShoppingCart  color="black" :size="3200"/>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card/index.js";
import {Button} from "@/components/ui/button/index.js";
import {ShoppingCart } from 'lucide-vue-next'

defineProps({
  product_data: {
    type: Object,
    required: true
  }
})

</script>
