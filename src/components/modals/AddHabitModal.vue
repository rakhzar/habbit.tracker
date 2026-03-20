<template>
  <div
    class="cover"
    v-if="store.isAddModalOpen"
    @click.self="store.closeAddModal"
  >
    <div class="popup">
      <h2>Новая привычка</h2>

      <div class="icon-label">Иконка</div>
      <div class="icon-select">
        <button
          class="icon"
          :class="{
            icon_active: store.newHabitIcon === 'sport',
          }"
          @click="store.setNewHabitIcon('sport')"
        >
          <SportIcon />
        </button>

        <button
          class="icon"
          :class="{
            icon_active: store.newHabitIcon === 'water',
          }"
          @click="store.setNewHabitIcon('water')"
        >
          <WaterIcon />
        </button>

        <button
          class="icon"
          :class="{ icon_active: store.newHabitIcon === 'food' }"
          @click="store.setNewHabitIcon('food')"
        >
          <FoodIcon />
        </button>
      </div>

      <form
        class="popup__form"
        @submit.prevent="store.addHabitFromModal"
      >
        <input
          v-model="store.newHabitName"
          type="text"
          placeholder="Название"
          required
        />
        <input
          v-model="store.newHabitTarget"
          type="text"
          placeholder="Цель (дней)"
          required
          min="1"
        />
        <button class="button" type="submit">Добавить</button>
      </form>

      <button class="popup__close" @click="store.closeAddModal">
        <CloseIcon />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useHabitStore } from '../../stores/habitStore';
import SportIcon from '../../img/SportIcon.vue';
import WaterIcon from '../../img/WaterIcon.vue';
import FoodIcon from '../../img/FoodIcon.vue';
import CloseIcon from '../../img/CloseIcon.vue';

const store = useHabitStore();
</script>

<style scoped>
.cover {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: var(--color-bg-outline);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup {
  background: var(--color-white);
  box-shadow: var(--color-bs-modal);
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup__close {
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background: none;
  cursor: pointer;
}

h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  margin-bottom: 20px;
}

.icon-label {
  font-size: 14px;
  line-height: 16px;
  color: var(--color-text-grey);
  margin-bottom: 10px;
}

.icon-select {
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
}

.icon {
  border: 1px solid var(--color-bg-purple);
  border-radius: 14px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  color: var(--color-bg-purple);
  transition: all 0.2s ease;
}

.icon svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  fill: none;
}

.icon_active {
  background: var(--color-bg-purple);
  color: var(--color-white);
}

.icon_active svg {
  filter: none;
}

.popup__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.popup__form input {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid var(--color-border-input);
  border-radius: 9px;
  font-family: inherit;
  font-size: 14px;
}

.button {
  background: var(--color-button);
  border-radius: 9px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  line-height: 14px;
  color: var(--color-text-purple);
  padding: 12px 30px;
  cursor: pointer;
}

.button:hover {
  background: var(--color-button-hover);
}
</style>
