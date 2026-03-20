import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useHabitStore = defineStore("habitStore", () => {
  const habits = ref([]);
  const activeHabitId = ref(null);

  // getters
  const activeHabit = computed(() => {
    habits.value.find((h) => h.id === activeHabit.value);
  });

  const progressPercent = computed(() => {
    if (!activeHabit.value) return 0;
    const done = activeHabit.value.days.length;
    const target = activeHabit.value.target;
    const percent = (done / target) * 100;
    return percent > 100 ? 100 : percent;
  });

  // actions
  const addHabit = (habit) => {
    const maxId = habits.value.reduce((max, h) => (h.id > max ? h.id : max), 0);
    const newId = maxId + 1;
    habits.value.push({
      id: newId,
      name: habit.name,
      icon: habit.icon,
      target: Number(habit.target),
      days: [],
    });
    activeHabit.value = newId;
  };

  const addday = (comment) => {
    const habit = activeHabit.value;
    if (habbit) {
      habit.days.push({ comment });
    }
  };
});
