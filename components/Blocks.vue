<template>
  <section class="about">
    <h2 class="about__title">Каждый проект <br> для нас — важный</h2>
    <div class="about__content">
      <div class="about__text-block">
        <p class="about__subtitle">Мы строительная компания полного цикла.</p>
        <p class="about__description">
          Вникаем во все детали, разрабатываем планировку будущего дома,
          продумываем конструктивные решения и общую архитектурную концепцию
        </p>
      </div>

      <div class="about__cards-wrapper">
        <div class="about-card">
          <img src="@/assets/images/House.jpg" class="about-card__icon" alt="Иконка дома" />
          <p class="about-card__number">57 домов</p>
          <p class="about-card__text">спроектировали и построили "под ключ"</p>
        </div>
        <div class="about-card">
          <img src="@/assets/images/Calendar.jpg" class="about-card__icon" alt="Иконка календаря" />
          <p class="about-card__number">14 лет</p>
          <p class="about-card__text">мы на рынке загородного строительства</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 80px 5%;
  box-sizing: border-box;

  @include tablet {
    padding: 40px 5%;
  }
}

.about__title {
  @include accent-title(38px);
  @include mobile {
    font-size: 28px;
    margin-bottom: 24px;
  }
}

.about__content {
  display: grid;
  grid-template-columns: 624px auto;
  align-items: start;
  gap: 40px;

  @include desktop {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}


.about__subtitle {
  @include text-base(20px, #333);
  @include responsive-font(20px, 16px);
  margin-bottom: 16px;
}

.about__description {
  @include text-base(20px, #666);
  @include responsive-font(20px, 16px);
}

.about__cards-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;

  @include mobile {
    flex-direction: column;
    align-items: center;
  }
}

.about-card {
  @include card;

  @include mobile {
    width: 100%;
    height: auto;
  }
}

.about-card__icon {
  width: 30px;
  height: 30px;
  margin-bottom: 16px;
}

.about-card__number {
  @include accent-title(24px);
  margin-bottom: 8px;
  white-space: nowrap;
}

.about-card__text {
  @include text-base(20px, #666);
  @include responsive-font(20px, 16px);
}
</style>
