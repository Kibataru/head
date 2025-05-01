<template>
  <footer class="footer">
    <div class="footer-top">
      <img class="logo" src="@/assets/images/Frame.png" alt="Логотип">
      
      <div class="links">
        <NuxtLink to="/projects">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </div>
      
      <div class="contacts">
        <div class="contact">
          <img src="@/assets/images/telephone.png" class="icon">
          <a>+7 (900) 900-90-90</a>
        </div>
        <div class="contact">
          <img src="@/assets/images/email.png" class="icon">
          <a>info@gmail.com</a>
        </div>
        <div class="contact">
          <img src="@/assets/images/place.png" class="icon">
          <a>г. Владивосток<br>ул. Выселковая 49, стр. 3</a>
        </div>
      </div>
        <div class="but"><Button /></div>
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

<style>


.footer {
  background: #254741;
  color: white;
  padding: 40px 88px 0;
  font-family: 'Open Sans', sans-serif;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
}

.logo {
  height: 40px;
  margin-left: 40px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.links a {
  color: white;
  text-decoration: none;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.legal {
  display: flex;
  gap: 150px;
  margin-right: 350px;

}

.but {
  margin-right: 45px;

}

.legal a {
  color: white;
  text-decoration: none;
}

</style>