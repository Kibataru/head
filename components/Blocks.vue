<template>
  <section class="about">
    <div class="about__text-block">
      <h2 class="about__title">Каждый проект <br> для нас — важный</h2>
      <p class="about__subtitle">Мы строительная компания полного цикла.</p>
      <p class="about__description">
        Вникаем во все детали, разрабатываем планировку будущего дома, продумываем
        конструктивные решения и общую архитектурную концепцию
      </p>
    </div>

    <div class="about__cards-wrapper">
      <div class="about-card">
        <img src="@/assets/images/House.jpg" class="about-card__icon">
        <p class="about-card__number">57 домов</p>
        <p class="about-card__text">спроектировали и построили "под ключ"</p>
      </div>
      <div class="about-card">
        <img src="@/assets/images/Calendar.jpg" class="about-card__icon">
        <p class="about-card__number">14 лет</p>
        <p class="about-card__text">мы на рынке загородного строительства</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-between;
  margin: 80px auto;
  padding: 0 5%;
  box-sizing: border-box;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    margin: 80px auto;
    padding: 0 5%;
  }

  @media (max-width: 576px) {
    margin: 40px auto;
    padding: 0 5%;
  }
}

.about__text-block {
  flex: 1;
  padding-right: 40px;
  max-width: 50%;

  @media (max-width: 992px) {
    padding-right: 0;
    max-width: 100%;
    text-align: left;
    margin-bottom: 40px;
    padding: 0;
  }

  @media (max-width: 576px) {
    margin-bottom: 30px;
  }
}

.about__title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 1.2;
  color: #000;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    font-size: 42px;
  }

  @media (max-width: 992px) {
    font-size: 38px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
}

.about__subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.about__description {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: #666;
  max-width: 500px;
  margin: 0;
  
  @media (max-width: 992px) {
    max-width: 100%;
    font-size: 18px;
    padding: 0;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
}

.about__cards-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
}

.about-card {
  background-color: #f5f6f3;
  border-radius: 15px;
  padding: 30px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 992px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    width: 180px;
    padding: 20px;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
}

.about-card__icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-bottom: 15px;
}

.about-card__number { 
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
}

.about-card__text { 
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  line-height: 1.4;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
  }
}
</style>