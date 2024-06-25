<script>

import { defineComponent, ref } from "vue";
import TerrainCard from "@/terrains/components/terrain-card.component.vue";
import { TerrainApiService } from "@/terrains/services/terrain.api.service.js";

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

      //TerrainApiService
      terrainService: null,

      reasons: [
        { name: 'Personal Use', code: 'P' },
        { name: 'Business Use', code: 'E' },
      ]
    };
  },
  async mounted() {
    try {
      this.terrainService = new TerrainApiService();
      const response = await this.terrainService.getAllTerrains();
      this.terrains = response.data;
    } catch (error) {
      console.error('Error al obtener los terrenos:', error);
      // Maneja el error según tus necesidades (por ejemplo, muestra un mensaje de error al usuario)
    }
  },
  methods: {
    async handleTerrainClick(terrainId) {
      let response = await this.terrainService.getTerrainById(terrainId);
      this.selectedTerrain = response.data;
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
    <h1 class="title">Terrain Available</h1>
    <div class="terrain-card-container">
      <terrain-card v-for="terrain in terrains" :key="terrain.id" :terrain="terrain"
        @terrain-clicked="handleTerrainClick" />
    </div>
  </div>

  <div>
    <pv-dialog class="pv-dialog" style="width: 100%; max-width: 40rem;" v-model:visible="dialogVisible" modal
      @md-closed="closeDialog" :draggable="false" header="More details">
      <pv-image :src="selectedTerrain.imageUrl" alt="image" width="100%" preview />
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
      <br>
      <div class="flex justify-content-center gap-2">
        <pv-button @click="dialogVisible = false; dialogVisible2 = true" class="pv-button">Rent
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
      </div>
      <br>
      <div class="flex flex-column gap-2">
        <label for="location">Address</label>
        <pv-input-text id="location" v-model="location" aria-describedby="location-help" />
      </div>
      <br>
      <div class="flex flex-column gap-2">
        <label for="reason">Reason for purchase or rental</label>
        <pv-dropdown id="reason" :options="reasons" optionLabel="name" placeholder="Select a Reason" v-model="reason" aria-label="reason of purchase or rent"></pv-dropdown>
      </div>
      <br>
      <div class="payment-container">
        <div class="payment-button">
          <pv-button @click="dialogVisible2 = false; dialogVisible3 = true">Start payment</pv-button>
        </div>
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
      <br>
      <div class="flex flex-column gap-2">
        <label for="cardname">Name in card</label>
        <pv-input-text id="cardname" v-model="cardname" aria-describedby="cardname-help" />
      </div>
      <br>
      <div class="flex flex-column gap-2">
        <label for="expiration">Expiration date</label>
        <pv-input-text id="expiration" v-model="expiration" aria-describedby="expiration-help" />
      </div>
      <br>
      <div class="flex flex-column gap-2">
        <label for="code">Security code</label>
        <pv-input-text id="code" v-model="sCode" aria-describedby="code-help" />
      </div>
      <br>
      <p>Amount payable S/{{ selectedTerrain.sale }}</p>
      <div class="payment-container">
        <div class="payment-button">
          <pv-button @click="dialogVisible3 = false" class="pv-button">Pay</pv-button>
        </div>
      </div>


    </pv-dialog>
  </div>
</template>

<style scoped>
.title{
  color: #4CAF50;
}

.terrain-list {
  padding: 3rem;
}

.terrain-card-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}

.payment-container{
  display: flex;
  text-align: center;
  flex-direction: column;
}

.payment-button{
  align-items: center;
}

@media (min-width: 300px) and (max-width: 1090px) {
  .terrain-card-container {
    justify-content: center;
  }
}
</style>