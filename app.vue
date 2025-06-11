<template>
  <div class="root">
    <Header />
    <Slider />
    <Blocks />
    <section class="projects">
      <div class="container">
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
import Slider from '@/components/Slider.vue'
import Blocks from '@/components/Blocks.vue'
import Projects from '@/components/Projects.vue'
import News from '@/components/News.vue'
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

body {
  font-family: sans-serif;
}

.root {
  flex: 1;
  display: grid;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas:
    "header"
    "slider"
    "blocks"
    "project"
    "news"
    "footer";
  min-height: 100vh;
}

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
.projects {
  background-color: #f5f7f3;
  padding-block: 80px;
}
</style>
