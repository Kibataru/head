<template>
  <div class="root">
    <Header />

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.root {
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: 
    "header"
    "main"
    "footer";
  min-height: 100vh;
  height: 100%;
}



.header {
  grid-area: header;
}

.content {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>