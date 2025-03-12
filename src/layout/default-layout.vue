<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <div class="min-h-[100vh] h-full">
      Container
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script setup>
name = "DefaultLayout";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

</script>
