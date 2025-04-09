<template>
  <div>
    <Navbar />
    <div class="min-h-[100vh] max-h-full p-4">
      <router-view></router-view>
    </div>
    <div class="z-20">
      <BackTop class="z-20" />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import BackTop from "@/components/Back-Top.vue";
</script>
