<template>
  <button
    class="menu__item"
    :class="{
      menu__item_active: store.activeHabitId === habit.id,
    }"
    @click="store.setActiveHabit(habit.id)"
  >
    <SportIcon v-if="habit.icon === 'sport'" />
    <WaterIcon v-else-if="habit.icon === 'water'" />
    <FoodIcon v-else-if="habit.icon === 'food'" />
  </button>
</template>

<script setup>
import { useHabitStore } from '../stores/habitStore';
import WaterIcon from '../img/WaterIcon.vue';
import FoodIcon from '../img/FoodIcon.vue';
import SportIcon from '../img/SportIcon.vue';

const props = defineProps({
  habit: {
    type: Object,
    required: true,
  },
});

const store = useHabitStore();
</script>

<style scoped>
.menu__item {
  background: var(--color-white);
  box-shadow: var(--color-box-shadow);
  border-radius: 14px;
  border: none;
  height: 45px;
  width: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu__item_active,
.menu__item:hover {
  background: var(--color-purple-active);
  color: var(--color-white);
}
</style>
