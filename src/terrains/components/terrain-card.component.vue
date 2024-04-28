<template>
  <pv-card>
    <template #content>
      <p>{{ terrain.description }}</p>
      <p>{{ terrain.usageClauses }}</p>
      <p>Size: {{ terrain.sizeSquareMeters }} square meters</p>
    </template>
  </pv-card>
</template>

<script>

import {Terrain} from "@/terrains/model/terrain.entity.js";

export default {
  name: "terrain-card",

  props: {
    terrain: Terrain // Propiedad para pasar los datos del terreno
  }
};
</script>

<style scoped>
/* Estilos específicos para la tarjeta */
.md-card {
  /* Personaliza según tus necesidades */
}
</style>