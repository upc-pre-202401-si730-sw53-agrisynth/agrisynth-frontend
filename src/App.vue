<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Content -->
    <div class="content">
      <router-view />
    </div>

  </div>
</template>

<script setup>
import Sidebar from './public/components/Sidebar.vue';
</script>

<style>
.content{
  margin-top: 5vh;
}

button {
  border: none;
  outline: none;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  opacity: 0.9;
}

</style>
