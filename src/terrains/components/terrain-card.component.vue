<script>
import { Terrain } from '../model/terrain.entity';

export default {
  props: {
    terrain: Terrain // Propiedad para pasar los datos del terreno
  },
  methods: {
    handleClick() {
      this.$emit('terrain-clicked', this.terrain.id);
    }
  }
};
</script>

<template>
  <pv-card class="md-card pv-card-container" style="width: 20rem; overflow: hidden" @click="handleClick">
    <template #header>
      <img class="image" :alt="terrain.name" :src="terrain.image">
    </template>
    <template #title>{{ terrain.name }}</template>
  </pv-card>
</template>

<style>
.image {
  max-width: 100%;
  height: auto;

}

.md-card {
  border-radius: 5px;
  transition: box-shadow 0.3s ease;
  text-align: center;
  justify-content: center;
  align-items: center;

}

.pv-card-container {
  width: 90%;
  max-width: 30rem;
}
</style>