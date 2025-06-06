<template>
  <div class="news__card">
    <picture class="news__card-picture">
      <source :srcset="`${image.x2} 2x, ${image.x1}`" />
      <img :src="image.x1" />
    </picture>
    <div class="news__card-info">
      <p class="news__card-date">{{ date }}</p>
      <p class="news__card-title">{{ title }}</p>
      <p class="news__card-text">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: Object,
  date: String,
  title: String,
  text: String
})
</script>

<style scoped lang="scss">
.news__card {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  width: 304px;
  scroll-snap-align: start;

  &-picture img {
    width: 100%;
    height: auto;
    display: block;
  }

  &-date {
    margin: 16px 0;
    font-family: $font-accent;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
  }

  &-title {
    margin-bottom: 8px;
    font-family: $font-accent;
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
  }

  &-text {
    font-family: $font-main;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    color: #666666;
  }

  @media (max-width: 1024px) {
    flex: 0 0 344px;
    width: 344px;
    min-width: 344px;
  }
}
</style>
