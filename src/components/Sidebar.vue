<template>
  <div class="panel">
    <LogoIcon alt="Логотип иконка habit" />

    <div class="menu">
      <HabitButton
        v-for="habit in store.habits"
        :key="habit.id"
        :habit="habit"
      />
    </div>

    <button class="menu__add" @click="store.openAddModal">
      <AddIcon />
    </button>
  </div>
</template>

<script setup>
import { useHabitStore } from '../stores/habitStore';
import LogoIcon from '../img/LogoIcon.vue';
import AddIcon from '../img/AddIcon.vue';

const store = useHabitStore();
</script>

<style scoped>
.panel {
  background: var(--color-white);
  min-height: 100vh;
  padding: 30px;
  border-right: 2px dotted var(--color-border-purple);
}

.menu {
  margin-bottom: 25px;
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
