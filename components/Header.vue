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
    </div>
  </header>
</template>

<script setup>
import Button from "~/components/Button.vue";
</script>

<style>
.header {
  background-color: white;
  height: 97px;
  display: flex;
  justify-content: center;
}

.header_161 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
}

.header_logo {
  height: 40px;
  width: 160px;
  margin-right: 80px;
}

.top {
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 16px;
  margin-right: 254px;
}

.top a {
  color: #666666;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
}

.header_159 {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header_icon {
  margin-right: 5px;
}

.two {
  display: flex;
  align-items: center;
}
.two a {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #254741;
}
</style>