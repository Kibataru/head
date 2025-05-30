<template>
  <header class="header">
    <div class="header_161">
      <img class="header_logo" src="@/assets/images/Group.png">

      <nav class="top">
        <NuxtLink to="/projects">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </nav>

      <div class="header_159">
        <div class="two">
          <img class="header_icon" src="@/assets/images/telephone.png">
          <a>+7 (900) 900-90-90</a>
        </div>
        <Button /> 
      </div>

      <button class="mobile" @click="toggleDrawer" aria-label="Открыть меню">
        <img src="@/assets/images/button.png"> 
      </button>
    </div>
  </header>
  <Drawer :isOpen="isDrawerOpen" @close="closeDrawer" />
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import Button from "~/components/Button.vue";
import Drawer from "~/components/Drawer.vue";

const isDrawerOpen = ref(false);
const toggleDrawer = () => { isDrawerOpen.value = !isDrawerOpen.value; };
const closeDrawer = () => { isDrawerOpen.value = false; };
watch(isDrawerOpen, (newValue) => {
  if (typeof document !== 'undefined') { if (newValue) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = ''; } }
});
onUnmounted(() => {
  if (typeof document !== 'undefined' && document.body.style.overflow === 'hidden') { document.body.style.overflow = ''; }
});
</script>

<style>
.header {
  background-color: white;
  padding: 20px 5%;
}

.header_161 {
  width: 100%;
  display: flex;
  flex-wrap: nowrap; 
  justify-content: space-between;
  align-items: center;
  gap: 80px;
}

.header_logo {
  height: 40px;
  width: auto;
}

.top {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-grow: 1; 
  flex-basis: 0; 
  min-width: 250px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}

.header_159 {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  font-size: 14px;
  font-family: 'Monserrat', sans-serif;
}

.header_159 .two {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.header_icon {
  height: 16px; 
  width: auto;
}

.mobile {
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.mobile img {
  height: 36px;
  width: auto;
  display: block; 
}

@media (max-width: 1200px) {
  .top {
    flex-wrap: wrap; 
    justify-content: flex-start; 
    row-gap: 8px; 
  }
}

@media (max-width: 920px) {
  .top {
    display: none;
  }
  .header_159 > *:not(.two) {
    display: none;
  }
  .mobile {
    display: block;
  }

  .header_161 {
    align-items: center;
    justify-content: flex-start;
    gap: 0;
  }

  .header_logo {
    margin-right: auto;
  }

  .header_159 {
    margin-right: 24px;
    gap: 0; 
  }
  
}

@media (max-width: 600px) {
  .header_159 { 
    display: none;
    margin-right: 0;
  }
  .mobile {
    display: block;
    margin-left: auto;
  }
  .header_logo {
      margin-right: 0;
  }
  .header_161 {
    justify-content: space-between;
    align-items: center;
    gap: 80px;
  }
}
</style>