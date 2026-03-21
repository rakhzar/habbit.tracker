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
      <input
        v-model="dayStore.dayComment"
        type="text"
        placeholder="Комментарий"
        :class="{ error: dayStore.dayCommentError }"
      />
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

const habitStore = useHabitStore();
const dayStore = useDayStore();
</script>

<style scoped>
.habbit {
  background: var(--color-white);
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.habbit__day {
  background: var(--color-white);
  border-radius: 10px 0 0 10px;
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
  border-radius: 5px;
  padding: 2px;
}
.habbit__delete:hover {
  background: var(--color-white);
}
.habbit__form {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  background: var(--color-border);
  border-radius: 10px;
  padding-right: 12px;
}
.habbit__form .new-day {
  background: var(--color-white);
  min-width: 150px;
  padding: 20px 40px;
}
.habbit__form input {
  flex: 1;
  padding: 12px 20px;
  border: 1px solid var(--color-border-input);
  border-radius: 9px;
  font-family: inherit;
  font-size: 14px;
}
.habbit__form input.error {
  border-color: var(--color-border-red);
}
.habbit__form .button {
  margin-left: auto;
  background: var(--color-button);
  border-radius: 9px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-purple);
  padding: 12px 30px;
  cursor: pointer;
  white-space: nowrap;
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
