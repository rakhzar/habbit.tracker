<template>
  <div v-if="habitStore.activeHabit">
    <div
      v-for="(day, index) in habitStore.activeHabit.days"
      :key="index"
      class="habbit"
    >
      <div class="habbit__day">День {{ index + 1 }}</div>
      <div class="habbit__comment">{{ day.comment }}</div>
      <button
        class="habbit__delete"
        @click="habitStore.deleteDay(index)"
      >
        <DeleteIcon />
      </button>
    </div>

    <form
      class="habbit__form"
      @submit.prevent="dayStore.addDayFromForm"
    >
      <div class="habbit__day new-day">
        День {{ habitStore.activeHabit.days.length + 1 }}
      </div>
      <div class="input-wrapper">
        <CommentIcon class="input-icon" />
        <input
          v-model="dayStore.dayComment"
          type="text"
          placeholder="Комментарий"
          :class="{ error: dayStore.dayCommentError }"
        />
      </div>
      <button class="button" type="submit">Готово</button>
    </form>
  </div>

  <div v-else class="empty-state">
    Нажмите +, чтобы добавить привычку
  </div>
</template>

<script setup>
import { useHabitStore } from '../stores/habitStore';
import { useDayStore } from '../stores/dayStore';
import DeleteIcon from '../img/DeleteIcon.vue';
import CommentIcon from '../img/CommentIcon.vue';

const habitStore = useHabitStore();
const dayStore = useDayStore();
</script>

<style scoped>
.input-wrapper {
  position: relative;
  flex: 1;
}

.input-icon {
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
  color: var(--color-text-grey);
}

.habbit,
.habbit__form {
  background: var(--color-white);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.habbit__day,
.habbit__form .new-day {
  background: var(--color-input-day);
  border-radius: 10px 0 0 10px;
  border-right: 1px solid var(--color-habbit-day);
  font-size: 14px;
  padding: 20px 40px;
  min-width: 150px;
}

.habbit__comment {
  font-size: 16px;
  padding: 20px 25px;
  flex: 1;
}

.habbit__delete {
  margin-left: auto;
  margin-right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
}

.habbit__form input {
  flex: 1;
  margin: 0 12px;
  color: var(--color-input);
  width: 100%;
  padding: 12px 20px 12px 40px;
  border: 1px solid var(--color-border-input);
  border-radius: 9px;
  font-size: 14px;
}

.habbit__form .button {
  background: var(--color-button);
  color: var(--color-purple-active);
  border: none;
  border-radius: 9px;
  padding: 12px 30px;
  cursor: pointer;
  margin-right: 12px;
  margin-left: 24px;
}

.habbit__form .button:hover {
  background: var(--color-button-hover);
}

.empty-state {
  text-align: center;
  padding: 50px;
  color: var(--color-text-grey);
}
</style>
