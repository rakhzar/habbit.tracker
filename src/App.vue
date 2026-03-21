<template>
  <div class="app">
    <Sidebar />
    <div class="content">
      <HeaderStats />
      <main></main>
    </div>
    <AddHabitModal />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import AddHabitModal from './components/AddHabitModal.vue';
import HeaderStats from './components/HeaderStats.vue';
</script>

<style>
.app {
  display: flex;
}

.content {
  min-width: 900px;
  padding: 45px;
}

main {
  margin-top: 30px;
}
</style>
