<template>
  <div class="news">
    <div class="news__container">
      <div class="news__header">
        <div class="news__header-title">Новости</div>
        <button class="news__header-button">Все новости</button>
      </div>
      <div class="news__cards">
        <NewsBlock
          v-for="(card, index) in news"
          :key="index"
          :title="card.title"
          :text="card.text"
          :image="card.image"
          :date="card.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsBlock from '@/components/Blocknews.vue'
import news1_1x from '@/assets/images/news/news1.jpg'
import news1_2x from '@/assets/images/news/news1@2x.jpg'
import news2_1x from '@/assets/images/news/news2.jpg'
import news2_2x from '@/assets/images/news/news2@2x.jpg'
import news3_1x from '@/assets/images/news/news3.jpg'
import news3_2x from '@/assets/images/news/news3@2x.jpg'
import news4_1x from '@/assets/images/news/news4.jpg'
import news4_2x from '@/assets/images/news/news4@2x.jpg'

const news = [
  {
    image: { x1: news1_1x, x2: news1_2x },
    date: '20 авг 2021',
    title: 'Как сделать строительство дешевле?',
    text: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: news2_1x, x2: news2_2x },
    date: '20 авг 2021',
    title: 'Почему Гуд Вилл строит лучшие дома?',
    text: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
  },
  {
    image: { x1: news3_1x, x2: news3_2x },
    date: '20 авг 2021',
    title: 'Преимущества и недостатки частного дома',
    text: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
  },
  {
    image: { x1: news4_1x, x2: news4_2x },
    date: '20 авг 2021',
    title: 'Из чего мы строим дома в ипотеку?',
    text: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
  }
]
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables.scss" as *;
@use "@/assets/styles/mixins.scss" as *;

.news {
  padding-top: 80px;
  padding-bottom: 60px;
  overflow: hidden;

  .news__container {
    width: 1264px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 0;

    @include tablet {
      padding: 0 24px;
      box-sizing: border-box;
    }

    @include mobile {
      padding: 0 16px;
    }
  }

  .news__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;

    &-title {
      font-family: $font-accent;
      font-size: 38px;
      font-weight: 700;
      line-height: 120%;
    }

    &-button {
      color: #029f59;
      border: 1px solid #029f59;
      background-color: #ffffff;
      font-family: $font-accent;
      font-size: 14px;
      font-weight: 600;
      border-radius: 10px;
      padding: 16px 24px;
      white-space: nowrap;
    }

    @include mobile { 
      align-items: flex-start;
      gap: 16px;
      flex-direction: column;

      &-button {
        align-self: flex-start;
      }
    }
  }

  .news__cards {
    display: grid;
    grid-template-columns: repeat(4, 304px);
    gap: 16px;

    @include tablet { 
      display: flex;
      overflow-x: auto;
      gap: 16px;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 4px;
    }
  }
}
</style>