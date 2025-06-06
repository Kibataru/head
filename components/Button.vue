<template>
  <div>
    <button class="button" @click="openModal = true">
      <p>Оставить заявку</p>
    </button>

    <DialogRoot v-model:open="openModal">
      <DialogPortal>
        <DialogOverlay class="overlay" @click.self="openModal = false" />
        <DialogContent class="modal">
          <DialogClose class="close-button">&times;</DialogClose>
          <DialogTitle class="modal-title">Оставить заявку</DialogTitle>
          <p class="modal-text">Сдается баннер</p>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose
} from 'reka-ui'

const openModal = ref(false)
</script>

<style scoped lang="scss">
.button {
  width: 204px;
  height: 49px;
  gap: 10px;
  border-radius: 10px;
  background-color: #029F59;
  border: none;
  color: #fff;
  font-family: $font-accent;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;


  p {
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.15px;
    margin: 0;
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.273);
  z-index: 1;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  padding: 32px;
  width: 400px;
  max-width: 90%;
  z-index: 2;
}

.modal-title {
  font-family: $font-accent;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.modal-text {
  font-family: $font-main;
  font-size: 16px;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #000;
  }
}
</style>
