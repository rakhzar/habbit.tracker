<template>
  <div class="panel">
    <LogoIcon class="logo" />

    <n-grid class="menu" :cols="1" :x-gap="12" :y-gap="12">
      <n-gi v-for="habit in store.habits" :key="habit.id">
        <HabitButton :habit="habit" />
      </n-gi>
    </n-grid>

    <button class="menu__add" @click="store.openAddModal">
      <AddIcon />
    </button>
  </div>
</template>

<script setup>
import { NGrid, NGi } from 'naive-ui';
import { useHabitStore } from '../stores/habitStore';
import LogoIcon from '../img/LogoIcon.vue';
import AddIcon from '../img/AddIcon.vue';

const store = useHabitStore();

const props = defineProps({
  habit: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.panel {
  background: var(--color-white);
  min-height: 100vh;
  padding: 30px;
}

.logo {
  margin-bottom: 50px;
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
