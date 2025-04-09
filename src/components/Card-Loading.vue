<template>
  <Card class="w-full h-[290px]">
    <CardContent class="space-y-4 w-full p-4">
      <Skeleton class="w-full h-[160px]" />
      <div class="space-y-4">
        <Skeleton class="w-[70%] h-[20px]" />
        <div class="flex items-center justify-between">
          <Skeleton class="w-[35%] h-[20px]" />
          <div class="flex gap-x-2">
            <Skeleton class="w-[40px] h-[30px]" />
            <Skeleton class="w-[40px] h-[30px]" />
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
</script>
