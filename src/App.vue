<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Content -->
    <router-view />
  </div>
</template>

<script setup>
import Sidebar from './public/components/Sidebar.vue';
</script>

<style scoped>
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
