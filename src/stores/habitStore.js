import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useHabitStore = defineStore(
  'habitStore',
  () => {
    const habits = ref([]);
    const activeHabitId = ref(null);
    const isAddModalOpen = ref(false);

    const newHabitName = ref('');
    const newHabitIcon = ref('sport');
    const newHabitTarget = ref(1);

    // state
    const isEditingTitle = ref(false);
    const editTitleValue = ref('');
    const titleError = ref(false);

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
    const startEditTitle = () => {
      if (!activeHabit.value) return;
      editTitleValue.value = activeHabit.value.name;
      isEditingTitle.value = true;
      titleError.value = false;
    };

    const updateHabitName = (id, newName) => {
      const habit = habits.value.find((h) => h.id === id);
      if (habit) {
        habit.name = newName;
      }
    };

    const saveTitle = () => {
      if (!editTitleValue.value.trim()) {
        titleError.value = true;
        return;
      }
      if (activeHabit.value) {
        updateHabitName(
          activeHabit.value.id,
          editTitleValue.value.trim()
        );
      }
      isEditingTitle.value = false;
      titleError.value = false;
    };

    const cancelEditTitle = () => {
      isEditingTitle.value = false;
      titleError.value = false;
    };

    const openAddModal = () => {
      isAddModalOpen.value = true;
    };

    const closeAddModal = () => {
      isAddModalOpen.value = false;
    };

    const setNewHabitIcon = (icon) => {
      newHabitIcon.value = icon;
    };

    const addHabitFromModal = () => {
      if (newHabitName.value && newHabitTarget.value) {
        addHabit({
          name: newHabitName.value,
          icon: newHabitIcon.value,
          target: newHabitTarget.value,
        });
        newHabitName.value = '';
        newHabitIcon.value = 'sport';
        newHabitTarget.value = 1;
      }
    };

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
      closeAddModal();
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
      isAddModalOpen,
      activeHabit,
      progressPercent,
      isEditingTitle,
      editTitleValue,
      titleError,
      startEditTitle,
      saveTitle,
      cancelEditTitle,
      newHabitName,
      newHabitIcon,
      newHabitTarget,
      openAddModal,
      closeAddModal,
      setNewHabitIcon,
      addHabitFromModal,
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
