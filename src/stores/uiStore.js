import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useHabitStore } from './habitStore';

export const useUiStore = defineStore('uiStore', () => {
  const habitStore = useHabitStore();

  const isEditingTitle = ref(false);
  const editTitleValue = ref('');

  const startEditTitle = () => {
    const active = habitStore.activeHabit.value;
    if (!active) return;
    editTitleValue.value = active.name;
    isEditingTitle.value = true;
  };

  const saveTitle = () => {
    const newName = editTitleValue.value.trim();
    if (!newName) return;
    const active = habitStore.activeHabit.value;
    if (active) {
      habitStore.updateHabitName(active.id, newName);
    }
    isEditingTitle.value = false;
  };

  const cancelEditTitle = () => {
    isEditingTitle.value = false;
  };

  return {
    isEditingTitle,
    editTitleValue,
    startEditTitle,
    saveTitle,
    cancelEditTitle,
  };
});
