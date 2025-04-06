<template>
  <div>
    <Input type="text" v-model="data_search" placeholder="Search..." />
  </div>
</template>

<script setup lang="ts">
import { Input } from "@/components/ui/input/index.js";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const data_search = ref<string>("");

function search() {
  router.push({
    path: router.currentRoute.value.fullPath,
    query: { search_data: data_search.value },
  });
}

watch(data_search, (new_val) => {
  search();
});
</script>
