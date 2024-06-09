<script>
import CorporatePlanDialog from '../components/corporate_plan.dialog.vue'
import AdvisoryPlanDialog from '../components/advisory_plan.dialog.vue'
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
  <div class="main-content">
    <pv-card class="card">
      <template #title>
        <h4 class="title">Select your Subscription Plan</h4>
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
  </div>

</template>

<style scoped>

.main-content{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.title{
  text-align: center;
  color: #4CAF50;
}

/*CARDS*/
.card{
  width: 30rem;
  overflow: hidden;
  margin-top: 25vh;
  background-color: #fcfcfc;
}

/*BUTTONS*/
.mini_button{
  height: 10%;
  font-size: 10px;
  transition-duration: 0.2s;
  background-color: #4CAF50;
  margin-left: 20px;
  color: white;
}

.large_button {
  width: 50%;
  background-color: #4CAF50;
  transition-duration: 0.2s;
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