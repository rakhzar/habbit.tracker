<template>
  <div class="app">
    <Sidebar />
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
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
