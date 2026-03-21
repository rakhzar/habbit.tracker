<template>
  <Sidebar />
  <div class="content">
    <HeaderStats />
    <main>
      <DaysList />
    </main>
  </div>
  <AddHabitModal />
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import AddHabitModal from './components/AddHabitModal.vue';
import HeaderStats from './components/HeaderStats.vue';
import DaysList from './components/DaysList.vue';
import AddDayForm from './components/AddDayForm.vue';
</script>

<style>
#app {
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
