<script>

import { defineComponent, ref } from "vue";
import TerrainCard from "@/terrains/components/terrain-card.component.vue";
import { getAllTerrains, getTerrainById } from "@/terrains/services/terrain.api.service.js";

export default defineComponent({

  name: "terrain-list",
  components: { TerrainCard },


  data() {
    return {
      terrains: [],
      selectedTerrain: null,
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,

      username: ref(null),
      location: ref(null),
      reason: ref(null),
      cardnum: ref(null),
      cardname: ref(null),
      expiration: ref(null),
      sCode: ref(null),
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

  <div class="terrain-list">
    <h1>Terrain Available</h1>
    <div class="terrain-card-container">
      <terrain-card v-for="terrain in terrains" :key="terrain.id" :terrain="terrain"
                    @terrain-clicked="handleTerrainClick" />

    </div>
  </div>

  <div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisible" modal @md-closed="closeDialog" :draggable="false"
               header="More details">
      <pv-image :src="selectedTerrain.image" alt="image" width="100%" preview />
      <h2>{{ selectedTerrain.name }}</h2>
      <div>
        <pv-fieldset legend="Description" class="pv-fieldset">
          <p class="m-0">{{ selectedTerrain.description }}</p>
        </pv-fieldset>
      </div>
      <div>
        <pv-fieldset legend="Location" class="pv-fieldset">
          <p class="m-0">{{ selectedTerrain.location }}</p>
        </pv-fieldset>
      </div>
      <div>
        <pv-fieldset legend="Clauses of use" class="pv-fieldset">
          <p class="m-0">{{ selectedTerrain.usageClauses }}</p>
        </pv-fieldset>
      </div>
      <div>
        <pv-fieldset legend="Area size" class="pv-fieldset">
          <p class="m-0">{{ selectedTerrain.sizeSquareMeters }} square meter</p>
        </pv-fieldset>
      </div>
      <div class="flex justify-content-center gap-2">
        <pv-button @click="dialogVisible = false, dialogVisible2 = true" class="pv-button">Rent
          S/{{ selectedTerrain.rent }}</pv-button>
      </div>
    </pv-dialog>
  </div>

  <div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisible2" modal @md-closed="closeDialog" :draggable="false"
               header="Payment form">
      <div class="flex flex-column gap-2">
        <label for="username">Full name</label>
        <pv-input-text id="username" v-model="username" aria-describedby="username-help" />
        <small id="username-help">Type your full name</small>
      </div>
      <div class="flex flex-column gap-2">
        <label for="location">Address</label>
        <pv-input-text id="location" v-model="location" aria-describedby="location-help" />
        <small id="location-help">Enter the address where you live</small>
      </div>
      <div class="flex flex-column gap-2">
        <label for="reason">Reason for purchase or rental</label>
        <pv-input-text id="reason" v-model="reason" aria-describedby="reason-help" />
        <small id="reason-help">Enter the reason why you buy or rent.</small>
      </div>
      <div class="flex justify-content-end gap-2">
        <pv-button @click="dialogVisible2 = false, dialogVisible3 = true" class="pv-button">Start pay</pv-button>
      </div>
    </pv-dialog>
  </div>

  <div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisible3" modal @md-closed="closeDialog" :draggable="false"
               header="Payment">
      <div class="flex flex-column gap-2">
        <label for="card-number">Card number</label>
        <pv-input-text id="cardnumber" v-model.number="cardnum" aria-describedby="cardnumber-help" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="cardname">Name in card</label>
        <pv-input-text id="cardname" v-model="cardname" aria-describedby="cardname-help" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="expiration">Expiration date</label>
        <pv-input-text id="expiration" v-model="expiration" aria-describedby="expiration-help" />
      </div>
      <div class="flex flex-column gap-2">
        <label for="code">Security code</label>
        <pv-input-text id="code" v-model="sCode" aria-describedby="code-help" />
      </div>
      <p>Amount payable S/{{ selectedTerrain.sale }}</p>
      <div class="flex justify-content-end gap-2">
        <pv-button @click="dialogVisible3 = false" class="pv-button">Pay</pv-button>
      </div>
    </pv-dialog>
  </div>

</template>

<style >
.pv-dialog {
  width: 40rem;
}

.pv-fieldset {
  margin: 1rem 0;
  /* Agrega un margen arriba y abajo de cada fieldset para separarlos entre sí */
}

.pv-button {
  padding: 10px 20px;
  background-color: #3C5A64;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;


}

.terrain-list {
  padding: 20px;
}

.terrain-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.terrain-card {
  flex: 1 0 30%;
  margin: 1rem;
}

@media (max-width: 800px) {
  .terrain-card {
    flex: 1 0 100%;
  }
}
</style>