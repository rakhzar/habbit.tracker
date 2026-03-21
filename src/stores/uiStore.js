import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useHabitStore } from './habitStore';

export const useUiStore = defineStore('uiStore', () => {
  const habitStore = useHabitStore();

  // состояние модалки добавления привычки
  const isAddModalOpen = ref(false);

  // состояние редактирования заголовка
  const isEditingTitle = ref(false);
  const editTitleValue = ref('');
  const titleError = ref(false);

  // ошибки формы новой привычки
  const newHabitNameError = ref(false);
  const newHabitTargetError = ref(false);

  //
  const newHabitName = ref('');
  const newHabitIcon = ref('sport');
  const newHabitTarget = ref(1);

  // actions
  const openAddModal = () => {
    isAddModalOpen.value = true;
  };

  const closeAddModal = () => {
    isAddModalOpen.value = false;
  };

  const setNewHabitIcon = (icon) => {
    newHabitIcon.value = icon;
  };

  const resetNewHabitForm = () => {
    newHabitName.value = '';
    newHabitIcon.value = 'sport';
    newHabitTarget.value = 1;
    newHabitNameError.value = false;
    newHabitTargetError.value = false;
  };

  const startEditTitle = () => {
    if (!habitStore.activeHabit.value) return;
    editTitleValue.value = habitStore.activeHabit.value.name;
    isEditingTitle.value = true;
    titleError.value = false;
  };

  const saveTitle = () => {
    if (!editTitleValue.value.trim()) {
      titleError.value = true;
      return;
    }
    if (habitStore.activeHabit.value) {
      habitStore.updateHabitName(
        habitStore.activeHabit.value.id,
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

  const addHabitFromModal = () => {
    let isValid = true;
    if (!newHabitName.value.trim()) {
      newHabitNameError.value = true;
      isValid = false;
    } else {
      newHabitNameError.value = false;
    }

    if (!newHabitTarget.value || newHabitTarget.value <= 0) {
      newHabitTargetError.value = true;
      isValid = false;
    } else {
      newHabitTargetError.value = false;
    }

    if (isValid) {
      habitStore.addHabit({
        name: newHabitName.value,
        icon: newHabitIcon.value,
        target: newHabitTarget.value,
      });
      resetNewHabitForm();
      closeAddModal();
    }
  };

  return {
    // state
    isAddModalOpen,
    isEditingTitle,
    editTitleValue,
    titleError,
    newHabitNameError,
    newHabitTargetError,
    newHabitName,
    newHabitIcon,
    newHabitTarget,
    // actions
    openAddModal,
    closeAddModal,
    setNewHabitIcon,
    resetNewHabitForm,
    startEditTitle,
    saveTitle,
    cancelEditTitle,
    addHabitFromModal,
  };
});
