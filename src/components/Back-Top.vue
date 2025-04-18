<template>
  <div
    :class="!isShow ? 'hidden z-10' : 'fixed grid bottom-14 pb-2 right-6 z-10'"
  >
    <Button
      @click="onRollBack"
      size="icon"
      variant="outline"
      class="w-[50px] h-[50px]"
    >
      <ArrowUp color="black" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-vue-next";

let isShow = ref(false);
window.onscroll = () => {
  if (window.pageYOffset > 30) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
};

const onRollBack = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
</script>
