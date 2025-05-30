<template>
  <div v-if="isOpen" class="drawer-overlay" @click.self="closeDrawer">
    <div class="drawer-content">
      <button @click="closeDrawer" class="drawer-close-button">
        <img src="@/assets/images/close.png">
      </button>

      <nav class="drawer-nav">
        <NuxtLink to="/projects" @click="handleLinkClick">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news" @click="handleLinkClick">Новости</NuxtLink>
        <NuxtLink to="/contacts" @click="handleLinkClick">Контакты</NuxtLink>
      </nav>

      <div class="drawer-contacts">
        <div class="drawer-contact">
          <img src="@/assets/images/telephone-white.png">
          <a>+7 (900) 900-90-90</a>
        </div>
        <div class="drawer-contact">
          <img src="@/assets/images/email-white.png">
          <a>info@gmail.com</a>
        </div>
        <div class="drawer-contact">
          <img src="@/assets/images/place-white.png">
          <a>
            г. Владивосток<br />ул. Выселковая 49, стр. 3
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
});
const emit = defineEmits(['close']);

const closeDrawer = () => {
  document.body.style.overflow = '';
  emit('close');
};

const handleLinkClick = () => {
  closeDrawer();
};

watch(() => props.isOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>



<style>
.drawer-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}

.drawer-content {
  background-color: #029F59;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 42px;
}

.drawer-close-button {
  background: none;
  border: none;
  align-self: flex-end;
  cursor: pointer;
}

.drawer-close-button img {
  width: 32px;
  height: 32px;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.drawer-nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
}

.drawer-contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 378px;
  padding-top: 20px;
  font-family: 'Monserrat', sans-serif;
}

.drawer-contact {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.drawer-contact img {
  width: 20px;
  height: 20px;
}

.drawer-contact span {
  color: white;
  font-size: 14px;
}
</style>
