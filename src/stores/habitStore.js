import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useHabitStore = defineStore(
  'habitStore',
  () => {
    const habits = ref([]);
    const activeHabitId = ref(null);

    watch(
      habits,
      () => {
        if (
          habits.value.length > 0 &&
          activeHabitId.value === null
        ) {
          activeHabitId.value = habits.value[0].id;
        }
      },
      { immediate: true }
    );

    // getters
    const activeHabit = computed(() =>
      habits.value.find((h) => h.id === activeHabitId.value)
    );

    const progressPercent = computed(() => {
      if (!activeHabit.value) return 0;
      const done = activeHabit.value.days.length;
      const target = activeHabit.value.target;
      const percent = (done / target) * 100;
      return percent > 100 ? 100 : percent;
    });

    // actions
    const addHabit = (habit) => {
      const maxId = habits.value.reduce(
        (max, h) => (h.id > max ? h.id : max),
        0
      );
      const newId = maxId + 1;
      habits.value.push({
        id: newId,
        name: habit.name,
        icon: habit.icon,
        target: Number(habit.target),
        days: [],
      });
      activeHabitId.value = newId;
    };

    const addDay = (comment) => {
      const habit = activeHabit.value;
      if (habit) {
        habit.days.push({ comment });
      }
    };

    const deleteDay = (index) => {
      const habit = activeHabit.value;
      if (habit) {
        habit.days.splice(index, 1);
      }
    };

    const deleteHabit = (id) => {
      habits.value = habits.value.filter((h) => h.id !== id);
      if (activeHabitId.value === id) {
        activeHabitId.value = habits.value[0]?.id || null;
      }
    };

    const setActiveHabit = (id) => {
      activeHabitId.value = id;
    };

    return {
      habits,
      activeHabitId,
      activeHabit,
      progressPercent,
      addHabit,
      addDay,
      deleteDay,
      deleteHabit,
      setActiveHabit,
    };
  },
  {
    persist: {
      key: 'habits',
      pick: ['habits'],
    },
  }
);
