<template>
  <div class="editable-input">
    <input
      ref="inputRef"
      v-model="store.editTitleValue"
      type="text"
      class="edit-input"
      :class="{ error: store.titleError }"
      @keyup.enter="store.saveTitle"
      @blur="store.saveTitle"
      autofocus
    />
    <button class="icon-btn" @click="store.cancelEditTitle">
      ✖️
    </button>
  </div>
</template>

<script setup>
import { useHabitStore } from '../stores/habitStore';

const store = useHabitStore();
</script>

<style scoped>
.editable-input {
  display: flex;
  align-items: center;
  gap: 8px;
}
.edit-input {
  font-size: 30px;
  font-family: inherit;
  padding: 4px 12px;
  border: 1px solid var(--color-border-input);
  border-radius: 9px;
  width: auto;
}
.edit-input.error {
  border-color: var(--color-border-red);
  animation: shake 0.3s ease-in-out;
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
.icon-btn:hover {
  background: var(--color-bg-hover);
}
</style>
