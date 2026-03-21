<template>
  <header>
    <div class="title-wrapper">
      <div v-if="!uiStore.isEditingTitle" class="title-display">
        <h1 @click="uiStore.startEditTitle">
          {{
            habitStore.activeHabit?.name || 'Выберите привычку'
          }}
        </h1>
        <button
          v-if="habitStore.activeHabit"
          class="icon-btn"
          @click="
            habitStore.deleteHabit(habitStore.activeHabit.id)
          "
        >
          <DeleteIcon />
        </button>
      </div>

      <EditableInput v-else />
    </div>

    <div class="progress">
      <div class="progress__text">
        <div class="progress__name">Прогресс</div>
        <div class="progress__percent">
          {{ habitStore.progressPercent.toFixed(0) }}%
        </div>
      </div>

      <div class="progress_bar">
        <div
          class="progress__cover-bar"
          :style="{ width: habitStore.progressPercent + '%' }"
        ></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import DeleteIcon from '../img/DeleteIcon.vue';
import { useHabitStore } from '../stores/habitStore';
import { useUiStore } from '../stores/uiStore';
import EditableInput from './EditableInput.vue';

const habitStore = useHabitStore();
const uiStore = useUiStore();
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.title-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}
.title-display {
  display: flex;
  align-items: center;
  gap: 8px;
}
.title-edit {
  display: flex;
  align-items: center;
  gap: 8px;
}
h1 {
  font-size: 30px;
  line-height: 33px;
  color: var(--color-text-black);
  cursor: pointer;
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
.progress {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 235px;
}
.progress__text {
  display: flex;
  justify-content: space-between;
}
.progress__name {
  font-size: 16px;
  color: var(--color-text-progress);
  font-weight: bold;
}
.progress__percent {
  font-size: 13px;
  color: var(--color-text-grey);
}
.progress__bar {
  width: 100%;
  background: var(--color-bg-white);
  border-radius: 4px;
  height: 5px;
  position: relative;
}
.progress__cover-bar {
  height: 5px;
  border-radius: 4px;
  background: var(--color-bg-purple);
  transition: width 0.5s;
}
</style>
