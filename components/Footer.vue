<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-col logo-section">
        <img class="logo" src="@/assets/images/Frame.png"/>
      </div>
      <div class="footer-col links">
        <NuxtLink to="/projects">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </div>
      <div class="footer-col contacts">
        <div class="contact">
          <img src="@/assets/images/telephone.png" class="icon" />
          <a>+7 (900) 900-90-90</a>
        </div>
        <div class="contact">
          <img src="@/assets/images/email.png" class="icon" />
          <a>info@gmail.com</a>
        </div>
        <div class="contact">
          <img src="@/assets/images/place.png" class="icon" />
          <a>г. Владивосток<br />ул. Выселковая 49, стр. 3</a>
        </div>
      </div>
      <div class="footer-col but">
        <Button />
      </div>
    </div>

    <div class="footer-bottom">
      <p>© Загдом, 2021</p>
      <div class="legal">
        <a>Политика конфиденциальности</a>
        <a>Пользовательское соглашение</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $color-bg-dark;
  color: white;
  padding: 40px 5%;
  font-family: $font-main;
  grid-row: 7;
}

.footer-top {
  display: grid;
  grid-template-areas:
    "logo-section gap links contacts but";
  grid-template-columns: auto 154px 1fr 1fr auto;
  align-items: start;
  padding-bottom: 40px;

  @include tablet {
    grid-template-areas:
      "logo-section"
      "links"
      "contacts"
      "but";
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @include mobile {
    gap: 15px;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
  text-align: left;

  a, p {
    font-family: $font-main;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: white;
    cursor: pointer;
    text-decoration: none;

  }
}

.logo-section {
  grid-area: logo-section;

  .logo {
    height: 100%;
    width: auto;
    max-width: 230px;
    min-width: 180px;
  }
}

.gap-column {
  grid-area: gap;

  @include tablet {
    display: none;
  }
}

.links {
  grid-area: links;
  gap: 24px;
}

.contacts {
  grid-area: contacts;
  font-family: $font-accent;
  font-size: 14px;
  gap: 24px;
dis  

  .contact {
    display: flex;
    align-items: center;
    gap: 8px;
    display: flex;

    .icon {
      height: 20px;
      width: 20px;
      flex-shrink: 0;
    }

  }
}

.but {
  grid-area: but;
  justify-content: flex-end;
  align-items: flex-start;

  @include tablet {
    justify-content: flex-start;
    margin-top: 10px;
  }
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  @include tablet {
    flex-direction: column;
    align-items: flex-start;
  }
}

.legal {
  display: flex;
  gap: 210px;
  margin-right: 400px;
  flex-wrap: wrap;

  @include tablet {
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  @include mobile {
    gap: 10px;
  }
}
</style>
