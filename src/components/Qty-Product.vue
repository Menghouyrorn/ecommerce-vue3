<template>
  <div class="flex gap-x-2">
    <Button size="icon" @click="removeQty" variant="outline">
      <Minus color="black" />
    </Button>
    <Input class="w-[60px] text-center text-sm" v-model="product_qty" />
    <Button size="icon" @click="addQty" variant="outline">
      <Plus color="black" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Button from "./ui/button/Button.vue";
import Input from "./ui/input/Input.vue";
import { Plus, Minus } from "lucide-vue-next";

let product_qty = ref(1);

const emit = defineEmits(["product_qty"]);

function addQty() {
  product_qty.value++;
}
function removeQty() {
  if (product_qty.value <= 1) {
    product_qty.value = 1;
  } else {
    product_qty.value--;
  }
}
watch(product_qty, (newVal) => {
  emit("product_qty", newVal);
});
</script>

<style scoped></style>
