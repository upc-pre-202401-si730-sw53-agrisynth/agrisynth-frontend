<script>

import {Terrain} from "@/terrains/model/terrain.entity.js";


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
    <div class="card-container" >
      <pv-card class="pv-card" style="width: 20rem; overflow: hidden" @click="handleClick">
        <template #header>
          <img class="image" :alt="terrain.name" :src="terrain.image">
        </template>
        <template #title>{{terrain.name}}</template>
      </pv-card>

    </div>

</template>



<style >

.image {
  max-width: 100%;
  height: auto;

}

.card-container {

}

.pv-card{
  text-align: center;
}



</style>