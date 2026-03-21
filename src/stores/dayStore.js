import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useHabitStore } from './habitStore';

export const useDayStore = defineStore('dayStore', () => {
  const dayComment = ref('');
  const dayCommentError = ref(false);
  const habitStore = useHabitStore();

  const setDayComment = (comment) => {
    dayComment.value = comment;
    dayCommentError.value = false;
  };

  const addDayFromForm = () => {
    if (!dayComment.value.trim()) {
      dayCommentError.value = true;
      return;
    }
    const habit = activeHabit.value;
    if (habit) {
      habit.days.push({ comment: dayComment.value });
    }
    dayComment.value = '';
    dayCommentError.value = false;
  };

  return {
    dayComment,
    dayCommentError,
    setDayComment,
    addDayFromForm,
  };
});
