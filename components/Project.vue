<template>
  <div class="project__card">
    <picture class="project__card-picture">
      <source
        :srcset="`${image_landscape.x2} 2x, ${image_landscape.x1}`"
        media="(min-width: 1189px)"
      />
      <source
        :srcset="`${image_portrait.x2} 2x, ${image_portrait.x1}`"
      />
      <img :src="image_portrait.x1" alt="Project Image" />
    </picture>
    <div class="project__card-info">
      <p class="project__card-title">{{ title }}</p>
      <p class="project__card-text" v-html="text" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  image_landscape: Object,
  image_portrait: Object,
  title: String,
  text: String
})
</script>

<style scoped lang="scss">
.project__card {
  display: flex;
  flex-direction: row-reverse;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  min-width: 624px;
  scroll-snap-align: start;
  flex-shrink: 0;

  &-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 32px 16px 32px 32px;
    width: 50%;
  }

  &-title {
    font-family: $font-accent;
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    overflow-wrap: break-word;
  }

  &-text {
    font-family: $font-main;
    font-size: 16px;
    font-weight: 400;
    line-height: 135%;
    color: #666666;
    overflow-wrap: break-word;
  }

  &-picture {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@include desktop {
  .project__card {
    flex-direction: column;

    &-info {
      width: 90%;
      padding: 24px;
    }
  }
}

@include mobile {
  .project__card {
    min-width: 90%;
    max-width: 90%;
  }
}
</style>
