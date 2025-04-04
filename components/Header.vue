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
            <img class="header_icon" src="@/assets/images/telephone.png" />
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
  
  <style lang="scss" scoped>
  .header {
    max-width: 1440px;
    height: 97px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    .header_161 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
  
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
  
        a {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          color: #666666;
          font-family: $font-second;
        }
      }
  
      .header_159 {
        display: flex;
        align-items: center;
        width: 386px;
        height: 49px;
        gap: 24px;
  
  
        .two{
          display: flex;
          align-items: center;
  
          .header_icon {
            width: 16px;
            height: 16px;
            margin-right: 1px;
          }
  
          a {
            font-family: $font-second;
            font-size: 14px;
          }
        }
  
      }
    }
  }
  </style>