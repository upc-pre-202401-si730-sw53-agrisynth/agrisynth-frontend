<script >

import {defineComponent, ref} from "vue";
import TerrainCard from "@/terrains/components/terrain-card.component.vue";
import {getAllTerrains, getTerrainById} from "@/terrains/services/terrain.api.service.js";


export default defineComponent({

  name: "terrain-list",
  components: {TerrainCard},


  data() {
    return {
      terrains: [],
      dialogVisible: false,
      visible : ref(false),
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
  },
  methods: {

  }

})
</script>

<template>

  <pv-button label="Show" @click="visible = true" />

  <div>
    <pv-dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
      <p>Aqui va toda la informacion de la card seleccionada</p>
    </pv-dialog>
  </div>

  <div>
    <terrain-card v-for="terrain in terrains" :key="terrain.id" :terrain="terrain" />
  </div>

</template>

<style >

</style>