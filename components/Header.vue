<template>
  <header class="header">
    <div class="header_161">
      <img class="header_logo" src="@/assets/images/Group.png" />

      <nav class="top">
        <NuxtLink to="/projects">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </nav>

      <div class="header_159">
        <div class="two">
          <img class="header_icon" src="@/assets/images/telephone.png"/>
          <a>+7 (900) 900-90-90</a>
        </div>
        <Button />
      </div>

      <button class="mobile" @click="toggleDrawer" aria-label="Открыть меню">
        <img src="@/assets/images/button.png"/>
      </button>
    </div>
  </header>
  <Drawer :isOpen="isDrawerOpen" @close="closeDrawer" />
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import Button from '~/components/Button.vue'
import Drawer from '~/components/Drawer.vue'

const isDrawerOpen = ref(false)
const toggleDrawer = () => { isDrawerOpen.value = !isDrawerOpen.value }
const closeDrawer = () => { isDrawerOpen.value = false }

watch(isDrawerOpen, (newValue) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = newValue ? 'hidden' : 'auto'
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined' && document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-bg-white;
  padding: $container-padding;
}

.header_161 {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 80px;

  @include mobile {
    justify-content: space-between;
    gap: 40px;
  }
}

.header_logo {
  height: 40px;
  width: auto;

  @include tablet {
    margin-right: auto;
  }

  @include mobile {
    margin-right: 0;
  }
}

.top {
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 250px;
  font-size: 16px;
  font-family: $font-main;

  @include desktop {
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 8px;
  }

  @include tablet {
    display: none;
  }
}

.header_159 {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  font-size: 14px;
  font-family: $font-accent;

  .two {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;

    @include mobile {
      display: none;
    }
  }
  > *:not(.two) {
    @include tablet {
      display: none;
    }
  }
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

  img {
    height: 36px;
    width: auto;
    display: block;
  }

  @include tablet {
    display: block;
  }

  @include mobile {
    margin-left: auto;
  }
}
</style>