<template>
  <div class="slider">
    <Swiper
      :modules="modules"
      :navigation="true"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="slider-content">
          <picture class="slider-image-wrapper">
            <source
              :srcset="`${slide.imageLandscape.x2} 2x, ${slide.imageLandscape.x1}`"
              media="(min-width: 768px)"
            />
            <img :src="slide.imagePortrait.x1" :alt="slide.title" class="slider-image" />
          </picture>
          <div class="slider-descrip">
            <h2 class="slider-title">{{ slide.title }}</h2>
            <p class="slider-text">{{ slide.description }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1Portrait1x from '@/assets/images/slider/slide-1-portrait.jpg';
import slide1Portrait2x from '@/assets/images/slider/slide-1-portrait@2x.jpg';
import slide1Landscape1x from '@/assets/images/slider/slide-1-landscape.jpg';
import slide1Landscape2x from '@/assets/images/slider/slide-1-landscape@2x.jpg';
import slide2Portrait1x from '@/assets/images/slider/slide-2-portrait.jpg';
import slide2Portrait2x from '@/assets/images/slider/slide-2-portrait@2x.jpg';
import slide2Landscape1x from '@/assets/images/slider/slide-2-landscape.jpg';
import slide2Landscape2x from '@/assets/images/slider/slide-2-landscape@2x.jpg';
import slide3Portrait1x from '@/assets/images/slider/slide-3-portrait.jpg';
import slide3Portrait2x from '@/assets/images/slider/slide-3-portrait@2x.jpg';
import slide3Landscape1x from '@/assets/images/slider/slide-3-landscape.jpg';
import slide3Landscape2x from '@/assets/images/slider/slide-3-landscape@2x.jpg';

const modules = [Navigation, Pagination, Autoplay];

const slides = [
  {
    imagePortrait: { x1: slide1Portrait1x, x2: slide1Portrait2x },
    imageLandscape: { x1: slide1Landscape1x, x2: slide1Landscape2x },
    title: 'Проектируем и строим загородные дома',
    description: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений'
  },
  {
    imagePortrait: { x1: slide2Portrait1x, x2: slide2Portrait2x },
    imageLandscape: { x1: slide2Landscape1x, x2: slide2Landscape2x },
    title: 'Дизайн-проект бесплатно',
    description: 'Для домов от 300 м²'
  },
  {
    imagePortrait: { x1: slide3Portrait1x, x2: slide3Portrait2x },
    imageLandscape: { x1: slide3Landscape1x, x2: slide3Landscape2x },
    title: 'Работаем уже 10 лет',
    description: 'Долговечность, экологичность, устойчивость к факторам внешней среды'
  }
];
</script>

<style lang="scss" scoped>
.slider {
  border-radius: 30px;
  margin-top: 40px;
  overflow: hidden;
  padding: 0px 5%;

  .swiper {
    width: 100%;
    height: 450px;
    border-radius: inherit;
  }

  .slider-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .slider-image-wrapper {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slider-descrip {
    position: absolute;
    bottom: 113px;
    left: 144px;
    right: 144px;
    color: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 460px;
  }

  .slider-title {
    font-family: 'Monserrat', sans-serif;
    font-weight: 700;
    font-size: 46px;
    line-height: 120%;
    margin: 0;
  }

  .slider-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  :deep(.swiper-pagination) {
    margin-bottom: 40px;

    .swiper-pagination-bullet {
      background-color: #C6C6C6;
      margin: 0 12px;
    }

    .swiper-pagination-bullet-active {
      background-color: #03B766;
    }
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    background-color: #03B766;
    color: white;
    padding: 0 7px;
    border-radius: 10px;
    width: 44px;
    height: 44px;

    &::after {
      font-size: 18px;
      font-weight: bold;
    }
  }

  :deep(.swiper-button-prev) {
    left: 20px;
  }

  :deep(.swiper-button-next) {
    right: 20px;
  }

  @media (max-width: 700px) {
    :deep(.swiper-pagination),
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      display: none;
    }
  }

  @media (max-width: 822px) {
    .swiper {
      height: 300px;
    }

    margin-top: 24px;
    margin-bottom: 80px;

    .slider-descrip {
      bottom: 30px;
      left: 24px;
      right: 24px;
      max-width: none;
      gap: 8px;
    }

    .slider-title {
      font-size: 30px;
    }

    .slider-text {
      font-size: 16px;
    }
  }

  @media (max-width: 370px) {
    border-radius: 0;
    .swiper {
      border-radius: 0;
      height: 220px;
    }

    .slider-descrip {
      bottom: 15px;
      left: 16px;
      right: 16px;
      padding: 0;
      gap: 6px;
    }

    .slider-title {
      font-size: 20px;
    }

    .slider-text {
      font-size: 12px;
    }
  }
}
</style>