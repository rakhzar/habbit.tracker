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
import SportIcon from './icons/SportIcon.vue';
import WaterIcon from './icons/WaterIcon.vue';
import FoodIcon from './icons/FoodIcon.vue';

const store = useHabitStore();

const props = defineProps({
  habit: {
    type: Object,
    required: true,
  },
});
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

.menu__item:hover {
  background: var(--color-bg-hover);
}

.menu__item:hover img {
  filter: brightness(0) invert(1);
}

.menu__item_active {
  background: var(--color-purple-active);
}

.menu__item_active img {
  filter: brightness(0) invert(1);
}
</style>
