<script>
import CorporatePlanDialog from './dialogs/corporate_plan.dialog.vue'
import AdvisoryPlanDialog from './dialogs/advisory_plan.dialog.vue'
export default{
  name: 'subscription',

  components: {
    AdvisoryPlanDialog,
    CorporatePlanDialog,
  },

  data(){
    return {
      visibleAD: false,
      visibleCOR: false,
    };
  }
}
</script>

<template>
  <pv-card class="card">
    <template #title>
      <h4>Select your Subscription Plan</h4>
    </template>
    <template #content>
      <div>
        <pv-button class="large_button" icon="pi pi-user" label="Advisory Plan" severity="primary"
                   @click="$router.push('/')"></pv-button>
        <div class="twoBlock">
          <pv-button class="mini_button" icon="pi pi-question-circle" text raised rounded
                     aria-label="Subscription Description" severity="contrast" @click="visibleAD = true"/>
          <advisory-plan-dialog v-model:visible="visibleAD" ></advisory-plan-dialog>
        </div>
      </div>

      <br>
      <div>
        <pv-button class="large_button" icon="pi pi-user" label="Corporate Plan" severity="primary"
                   @click="$router.push('/')"></pv-button>
        <div class="twoBlock">
          <pv-button class="mini_button" icon="pi pi-question-circle" text raised rounded
                     aria-label="Subscription Description" severity="contrast" @click="visibleCOR = true"/>
          <corporate-plan-dialog v-model:visible="visibleCOR"></corporate-plan-dialog>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

/*CARDS*/

.card{
  width: 30rem;
  text-align: center;
  margin-top: 150px;
  margin-left: 50px;
  overflow: hidden;
  background-color: #95C8BC;
}

/*BUTTONS*/
.mini_button{
  width: 80%;
  height: 10%;
  font-size: 10px;
  transition-duration: 0.2s;
  background-color: #3C5A64;
  margin-left: 20px;
  color: white;
}

.mini_button:hover {
  background-color: white;
  color: black;
}


.large_button {
  width: 50%;
  background-color: #3C5A64;
  transition-duration: 0.2s;
}

.large_button:hover {
  background-color: #ffffff;
  color: black;
}

/*BLOCKS*/
.twoBlock{
  display: inline-flex;
}

@media (max-width: 768px){
  .card {
    width: 20rem;
    margin-left: 0;
    text-align: center;
    margin-top: 50px;
  }

}
</style>