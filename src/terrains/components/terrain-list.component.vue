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
      selectedTerrain: null,
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      value : ref(null)
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
    async handleTerrainClick(terrainId) {
      this.selectedTerrain = await getTerrainById(terrainId);
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    }
  }

})
</script>

<template>


  <div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisible" modal @md-closed="closeDialog"   :draggable="false" header="Más detalles" >
      <pv-image :src="selectedTerrain.image" alt="image" width="100%" preview />
      <h2>{{selectedTerrain.name}}</h2>
      <div >
        <pv-fieldset legend="Descripción">
          <p class="m-0">{{selectedTerrain.description}}</p>
        </pv-fieldset>
      </div>
      <div>
        <pv-fieldset legend="Ubicación">
          <p class="m-0">{{selectedTerrain.location}}</p>
        </pv-fieldset>
      </div>
      <div>
        <pv-fieldset legend="Clausilas de uso">
          <p class="m-0">{{selectedTerrain.usageClauses}}</p>
        </pv-fieldset>
      </div>
      <div>
        <pv-fieldset legend="Tamaño del area">
          <p class="m-0">{{selectedTerrain.sizeSquareMeters}} metros cuadrados</p>
        </pv-fieldset>
      </div>
      <div class="flex justify-content-center gap-2">
        <pv-button @click="dialogVisible = false, dialogVisible2 = true">Compra S/{{selectedTerrain.sale}}</pv-button>
        <pv-button @click="dialogVisible = false, dialogVisible2 = true">Alquiler S/{{selectedTerrain.rent}}</pv-button>
      </div>
    </pv-dialog>
  </div>

  <div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisible2" modal @md-closed="closeDialog"   :draggable="false" header="Formulario" >
      <div class="flex flex-column gap-2">
        <label for="username">Nombre completo</label>
        <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
        <small id="username-help">Digita tus nombres y apellidos.</small>
      </div>
      <div class="flex flex-column gap-2">
        <label for="location">Dirección</label>
        <pv-input-text id="location" v-model="value" aria-describedby="location-help" />
        <small id="location-help">Digita la direccion en donde vives.</small>
      </div>
      <div class="flex flex-column gap-2">
        <label for="reason">Razón de compra o alquiler</label>
        <pv-input-text id="reason" v-model="value" aria-describedby="reason-help" />
        <small id="reason-help">Digita la razon por la que compras o rentas.</small>
      </div>
      <div class="flex justify-content-end gap-2">
        <pv-button @click="dialogVisible2 = false, dialogVisible3 = true">Iniciar pago</pv-button>
      </div>
    </pv-dialog>
  </div>

  <div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisible3" modal @md-closed="closeDialog"   :draggable="false" header="Más detalles" >
      <div class="flex flex-column gap-2">
        <label for="username">Numero de tarjeta</label>
        <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="username">Nombres y apellidos</label>
        <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="username">Expiracion</label>
        <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="username">Codigo</label>
        <pv-input-text id="username" v-model="value" aria-describedby="username-help" />
      </div>
      <p>Monto total a pagar S/{{selectedTerrain.sale}}</p>
      <div class="flex justify-content-end gap-2">
        <pv-button @click="dialogVisible3 = false">Pagar</pv-button>
      </div>
    </pv-dialog>
  </div>

  <div>
    <terrain-card v-for="terrain in terrains" :key="terrain.id" :terrain="terrain" @terrain-clicked="handleTerrainClick" />
  </div>



</template>

<style >

.pv-dialog {
  width: 40rem;
}
.pv-float-label{
  width: 100px;
}
</style>