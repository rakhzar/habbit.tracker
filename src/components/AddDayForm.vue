<template>
  <form
    class="habbit__form"
    @submit.prevent="dayStore.addDayFromForm"
  >
    <input
      v-model="dayStore.dayComment"
      type="text"
      placeholder="Комментарий"
      :class="{ error: dayStore.dayCommentError }"
    />
  </form>
</template>

<script setup>
import { useDayStore } from '../stores/dayStore';

const dayStore = useDayStore();
</script>

<style scoped>
.habbit__form {
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
}
input {
  background: var(--color-white);
  border: 1px solid var(--color-border-input);
  border-radius: 9px;
  font-family: inherit;
  flex: 1;
  font-size: 14px;
}
input.error {
  border-color: var(--color-border-red);
}
.button {
  background: var(--color-button);
  border-radius: 9px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-purple);
  padding: 12px 30px;
  cursor: pointer;
}
.button:hover {
  background: var(--color-button-hover);
}
</style>
