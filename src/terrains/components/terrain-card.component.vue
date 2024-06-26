<script>
import { Terrain } from '../model/terrain.entity';

export default {
  props: {
    terrain: Terrain
  },
  methods: {
    handleClick() {
      this.$emit('terrain-clicked', this.terrain.id);
    }
  }
};
</script>

<template>
  <pv-card class="pv-card-container" @click="handleClick">
    <template #header>
      <img class="image" :alt="terrain.name" :src="terrain.imageUrl">
    </template>
    <template #title>{{ terrain.name }}</template>
  </pv-card>
</template>

<style scoped>
.image {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.pv-card-container {
  border-radius: 1rem;
  transition: box-shadow 0.3s ease;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
}
</style>