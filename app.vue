<template>
  <div class="root">
    <Header />
    <Slider />
    <Blocks />
    <section class='projects'>
      <div class='container'>
         <Projects />
      </div>
   </section>
    <News />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Slider from './components/Slider.vue'
import Blocks from './components/Blocks.vue'
import Projects from './components/Projects.vue'
import News from './components/News.vue'
</script>

<style>

.header {
  grid-area: header;
}
.slider {
  grid-area: slider;
}
.blocks {
  grid-area: blocks;
}
.projects {
  grid-area: project;
}
.news {
  grid-area: news;
}
.footer {
  grid-area: footer;
}

.root {
  display: grid;
  grid-template-rows: auto auto auto auto auto 1fr auto;
  grid-template-areas: 
    "header"
    "slider"
    "blocks"
    "project"
    "news"
    "."
    "footer";
  min-height: 100vh;
}


.projects {
   background-color: #F5F7F3;
   padding-block: 80px;
}

</style>