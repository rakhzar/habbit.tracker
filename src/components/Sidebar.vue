<template>
  <div class="panel">
    <LogoIcon alt="Логотип иконка habit" />

    <div class="menu">
      <HabitButton
        v-for="habit in habitStore.habits"
        :key="habit.id"
        :habit="habit"
      />
    </div>

    <button class="menu__add" @click="uiStore.openAddModal">
      <AddIcon />
    </button>
  </div>
</template>

<script setup>
import HabitButton from './HabitButton.vue';
import { useHabitStore } from '../stores/habitStore';
import { useUiStore } from '../stores/uiStore';
import LogoIcon from '../img/LogoIcon.vue';
import AddIcon from '../img/AddIcon.vue';

const habitStore = useHabitStore();
const uiStore = useUiStore();
</script>

<style scoped>
.panel {
  min-height: 100vh;
  padding: 30px;
}

.menu {
  margin: 25px 0 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.menu__add {
  border: 1px solid var(--color-border);
  border-radius: 14px;
  height: 45px;
  width: 45px;
  cursor: pointer;
  margin: 0 auto;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu__add:hover {
  background: var(--color-bg-white);
}
</style>
