<template>
  <footer class="footer">
    <div class="footer-top">
      <img class="logo" src="@/assets/images/Frame.png">
      
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
  padding: 5%;
  grid-row: 3;
  font-family: 'Open Sans', sans-serif;
}


.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 40px;
}

.logo {
  height: 40px;
  width: auto;
  max-width: 230px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 200px;
}

.contacts {
  display: flex;
  flex-direction: column;
  font-family: 'Monserrat', sans-serif;
  font-size: 14px;
  gap: 24px;
}

.contacts .contact {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  opacity: 60%;  
}

.legal {
  display: flex;
  gap: 180px;
  flex-wrap: wrap;
}


@media (max-width: 1024px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  .links, .contacts {
    min-width: auto;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;

  }

  .legal {
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;

  }
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 20px 30px;
  }
  .legal {
    gap: 10px;
  }
  .legal a {
    text-align: left;
  }
}
</style>
