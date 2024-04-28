<script >

import {defineComponent} from "vue";
import TerrainCard from "@/terrains/components/terrain-card.component.vue";
import {getAllTerrains} from "@/terrains/services/terrain.api.service.js";

export default defineComponent({

  name: "terrain-list",
  components: {TerrainCard},

  data() {
    return {
      terrains: []
    };
  },
  async mounted() {
    try {
      // Llama a la función para obtener los terrenos desde la API
      this.terrains = await getAllTerrains();
    } catch (error) {
      console.error('Error al obtener los terrenos:', error);
      // Maneja el error según tus necesidades (por ejemplo, muestra un mensaje de error al usuario)
    }
  }
})
</script>

<template>

  <div>
    <terrain-card v-for="terrain in terrains" :key="terrain.id" :terrain="terrain" />
  </div>

</template>

<style >

</style>