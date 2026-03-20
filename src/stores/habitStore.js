import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useHabitStore = defineStore("habitStore", () => {
  const habits = ref([]);
  const activeHabitId = ref(null);

  // getters
  const activeHabit = computed(() => {
    habits.value.find((h) => h.id === activeHabit.value);
  });
});
