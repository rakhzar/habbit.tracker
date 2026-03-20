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
    const target = activeHabit.value.days.length;
    const percent = (done / target) * 100;
    return percent > 100 ? 100 : percent;
  });
});
