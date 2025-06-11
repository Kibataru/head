<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer__logo">
        <img class="footer__logo-img" src="@/assets/images/Frame.png"/>
      </div>

      <nav class="footer__links">
        <NuxtLink to="/projects">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </nav>

      <div class="footer__contacts">
        <div class="footer__contact">
          <img src="@/assets/images/telephone.png" class="footer__icon"/>
          <a>+7 (900) 900-90-90</a>
        </div>
        <div class="footer__contact">
          <img src="@/assets/images/email.png" class="footer__icon" />
          <a>info@gmail.com</a>
        </div>
        <div class="footer__contact">
          <img src="@/assets/images/place.png" class="footer__icon"/>
          <a>г. Владивосток<br />ул. Выселковая 49, стр. 3</a>
        </div>
      </div>

      <div class="footer__button-wrap">
        <Button />
      </div>

      <p class="footer__copyright">© Загдом, 2021</p>
      <a class="footer__policy" href="#">Политика конфиденциальности</a>
      <a class="footer__agreement" href="#">Пользовательское соглашение</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $color-bg-dark;
  color: #fff;
  padding: 40px 5%;
  font-family: $font-main;

  &-top {
    display: grid;
    grid-template-columns: auto 154px 1fr 1fr auto;
    grid-template-areas:
      "logo gap links contacts button"
      "copyright gap policy agreement .";
    row-gap: 32px;
    column-gap: 24px;

    @include tablet {
      grid-template-columns: 1fr;
      grid-template-areas:
        "logo"
        "links"
        "contacts"
        "button"
        "copyright"
        "policy"
        "agreement";
      row-gap: 20px;
    }

    @include mobile {
      row-gap: 15px;
    }
  }

  &__logo {
    grid-area: logo;
  }

  &__logo-img {
    width: auto;
    height: auto;
    max-width: 230px;
    object-fit: contain;
    display: block;
  }

  &__links {
    grid-area: links;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__contacts {
    grid-area: contacts;
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-family: $font-accent;
    font-size: 14px;
  }

  &__contact {
    display: flex;
    gap: 8px;
    line-height: 120%;
    align-items: flex-start;
  }

  &__icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  &__button-wrap {
    grid-area: button;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    @include tablet {
      justify-content: flex-start;
    }
  }

  &__copyright {
    grid-area: copyright;
    margin: 0;
    font-size: 14px;
  }

  &__policy,
  &__agreement {
    font-size: 14px;
    text-decoration: none;
  }

  &__policy {
    grid-area: policy;
    opacity: 0.6;
  }

  &__agreement {
    grid-area: agreement;
    opacity: 0.6;
  }
}
</style>
