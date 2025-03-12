<template>
  <div>
    <Input type="text" v-model="data_search" placeholder="Search..."/>
  </div>
</template>

<script setup lang="ts">
import {Input} from "@/components/ui/input/index.js";
import {ref, watch} from "vue";

const data_search = ref<string>('');

function search() {
  console.log(data_search.value);
}

watch(data_search, (new_val) => {
  search();
});

</script>
