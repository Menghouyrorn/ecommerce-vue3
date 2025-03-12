<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Navbar/>
    <div class="h-[100vh] p-4">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>
