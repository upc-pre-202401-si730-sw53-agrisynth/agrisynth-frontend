<template>
  <pv-card class="md-card pv-card-container">
    <template #content>
      <p><strong>{{ machinary.name }}</strong></p>
      <p><strong>Price: {{ machinary.price }}</strong></p>
      <div class="image-container">
        <img :src="machinary.image" alt="Machinary Image" class="machinary-image" />
      </div>
      <div class="card-buttons">
        <pv-button @click="showComprarDialog">Buy</pv-button>
        <pv-button @click="showAlquilarDialog">Rent</pv-button>
      </div>
      <pv-dialog v-model:visible="visibleComprar" modal header="Comprar" :style="{ width: '30rem' }">
        <div style="text-align:center">
          <form class="form-container">
            <div class="form-group">
              <label for="name">Full name</label>
              <pv-input-text id="name" v-model="value" aria-describedby="name-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="ubication">Location</label>
              <pv-input-text id="ubication" v-model="value" aria-describedby="ubication-help" class="wide-input" />
            </div>
            <div class="form-group">
              <label for="reason">Purchase Reason</label>
              <pv-input-text id="reason" v-model="value" aria-describedby="reason-help" class="wide-input" />
            </div>
            <pv-button label="Iniciar Trámite" class="start-process-button" @click="iniciarTramite">Start Process</pv-button>
          </form>
        </div>
      </pv-dialog>

      <pv-dialog v-model:visible="visibleAlquilar" modal header="Alquilar" :style="{ width: '30rem' }">
        <div style="text-align:center">
          <form class="form-container">
            <div class="form-group">
              <label for="name">Full name</label>
              <pv-input-text id="name" v-model="value" aria-describedby="name-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="ubication">Location</label>
              <pv-input-text id="ubication" v-model="value" aria-describedby="ubication-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="reason">Rent Reason</label>
              <pv-input-text id="reason" v-model="value" aria-describedby="reason-help" class="wide-input" />
            </div>
            <pv-button label="Iniciar Trámite" class="start-process-button" @click="iniciarTramite">Start Process</pv-button>
          </form>
        </div>
      </pv-dialog>

      <pv-dialog v-model:visible="visiblePago" modal header="Pago" :style="{ width: '30rem' }">
        <div style="text-align:center">
          <form class="form-container">
            <div class="form-group">
              <label for="cardNumber">Card number</label>
              <pv-input-text id="cardNumber" v-model="cardNumber" aria-describedby="cardNumber-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="cardName">Name</label>
              <pv-input-text id="cardName" v-model="cardName" aria-describedby="cardName-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="cardLastName">Last name</label>
              <pv-input-text id="cardLastName" v-model="cardLastName" aria-describedby="cardLastName-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="expiration">Expiration date</label>
              <pv-input-text id="expiration" v-model="expiration" aria-describedby="expiration-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label for="securityCode">Security code</label>
              <pv-input-text id="securityCode" v-model="securityCode" aria-describedby="securityCode-help" class="wide-input"/>
            </div>
            <div class="form-group">
              <label>Total Amount to Pay: {{ totalAmount }}</label>
            </div>
            <pv-button label="Confirmar" class="confirm-button" @click="confirmPayment">Confirm</pv-button>
          </form>
        </div>
      </pv-dialog>
    </template>
  </pv-card>
</template>

<script>
import {Machinary} from "@/machinerys/model/machinary.entity.js";
export default {
  name: "machinary-card",
  components: {},

  props: {
    machinary: Machinary,
  },
  data() {
    return {
      machineryItems: [],
      visibleComprar: false,
      visibleAlquilar: false,
      visiblePago: false,
      cardNumber: '',
      cardName: '',
      cardLastName: '',
      expiration: '',
      securityCode: '',
      totalAmount: '$0'
    };
  },
  methods: {
    showComprarDialog() {
      this.visibleComprar = true;
    },
    showAlquilarDialog() {
      this.visibleAlquilar = true;
    },
    confirmPayment() {
      this.visiblePago = false;
    },
    iniciarTramite() {
      this.visiblePago = true;
      this.visibleComprar = false;
      this.visibleAlquilar= false;
    }
  }
};

</script>


<style>
.md-card {
  border-radius: 5px;
  padding: 16px;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  padding: 20px;
  justify-content: center;
  align-items: center;

}


.card-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  align-items: center;
}

.card-buttons button {
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3C5A64;
  margin-bottom: 10px;
  align-items: center;
}


.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

.form-group label {
  float: left;
  margin-left: 10px;
  width: 40%;
  margin-bottom: 5px;
}

.start-process-button , .confirm-button{
  margin-top: 10px;
  margin-left: 240px;
  background-color: #3C5A64;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.wide-input {
  width: 80%;
  padding: 5px;
  box-sizing: border-box;
}

.image-container {
  max-width: 100%;
  overflow: hidden;
}

.machinary-image {
  width: 100%;
  height: auto;
  display: block;
}
.pv-card-container{
  width:90%;
  height:95%;
  max-width:30rem;

}

</style>
