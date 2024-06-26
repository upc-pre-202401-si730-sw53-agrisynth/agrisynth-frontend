<script>
export default{
  name:'team-workers-section',

  data(){
    return{
      isAddTeamWorkerDialogVisible: false,
      localTeamWorkerForm: { ...this.teamWorkerForm }
    }
  },

  props: {
    fetchData: Function,
    teamWorkers : Array,
    teams: Array,
    workers: Array,
    teamWorkerForm : {
      type: Object,
      required: true,
    },

    //Team Worker Service
    teamWorkerApiService: {
      type: Object,
      required: true,
    }
  },

  async mounted() {
    await this.callFetchData();
  },

  methods:{
    callFetchData(){
      if (this.fetchData) {
        this.fetchData();
      }
    },

    getTeamName(teamId){
      const team = this.teams.find(team => team.id === teamId);
      return team ? team.name : 'Unknown Team';
    },

    getWorkerName(workerId) {
      const worker = this.workers.find(worker => worker.id === workerId);
      return worker ? worker.name : 'Unknown Worker';
    },

    async submitTeamWorker() {
      try {
        const newTeamWorker = {
          teamId: this.localTeamWorkerForm.teamId.id,
          workerId: this.localTeamWorkerForm.workerId.id
        };
        await this.teamWorkerApiService.createTeamWorker(newTeamWorker);
        await this.callFetchData();
        this.cancelAddTeamWorker();
      } catch (error) {
        console.error('Error submitting team worker:', error);
      }
    },

    cancelAddTeamWorker() {
      this.teamWorkerForm.value = { teamId: '', workerId: '' };
      this.isAddTeamWorkerDialogVisible = false;
    },

    async deleteTeamWorker(id) {
      try {
        await this.teamWorkerApiService.deleteTeamWorker(id);
        await this.callFetchData();
      } catch (error) {
        console.error('Error deleting team worker:', error);
      }
    },
  },

}
</script>

<template>
  <pv-card class="team-worker-section-card">
    <template #title>
      <div class="title-container">
        <h1 class="title">Team Workers</h1>
        <pv-button label="Add" class="add-button" @click="isAddTeamWorkerDialogVisible = true" />
      </div>
    </template>
    <template #content>
      <pv-data-table :value="teamWorkers" showGridlines tableStyle="width:100%">
        <pv-column header="Team" style="width:40%">
          <template #body="slotProps">
            {{ getTeamName(slotProps.data.teamId) }}
          </template>
        </pv-column>
        <pv-column header="Worker" style="width:40%">
          <template #body="slotProps">
            {{ getWorkerName(slotProps.data.workerId) }}
          </template>
        </pv-column>
        <pv-column header="Actions" style="width:20%; text-align: center">
          <template #body="slotProps">
            <pv-button label="Delete" class="delete-button" @click="deleteTeamWorker(slotProps.data.id)" />
          </template>
        </pv-column>
      </pv-data-table>
    </template>
  </pv-card>

  <pv-dialog v-model:visible="isAddTeamWorkerDialogVisible" modal @md-closed="cancelAddTeamWorker" :draggable="false" header="Add Team Worker">
    <form @submit.prevent="submitTeamWorker">
      <div class="field">
        <label for="team" class="font-semibold">Team</label>
        <br>
        <pv-dropdown class="drop" v-model="localTeamWorkerForm.teamId" :options="teams" optionLabel="name" placeholder="Select Team" required />
      </div>
      <div class="field">
        <label for="worker" class="font-semibold">Worker</label>
        <br>
        <pv-dropdown class="drop" v-model="localTeamWorkerForm.workerId" :options="workers" optionLabel="name" placeholder="Select Worker" required />
      </div>
      <div class="button-group">
        <pv-button type="button" class="cancel-button" label="Cancel" @click="cancelAddTeamWorker" />
        <pv-button type="submit" class="save-button" label="Save" />
      </div>
    </form>
  </pv-dialog>

</template>

<style scoped>
.team-worker-section-card{
  margin: 1.5rem 0 1.5rem 0;
}

.title-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}

.title {
  margin: 0;
  color: #4CAF50;
}

.add-button {
  background-color: lightgreen;
  color: white;
  padding: 1rem;
}

.field {
  margin-bottom: 1rem;
}

.save-button {
  background-color: lightgreen;
  color: white;
}

.cancel-button,
.delete-button {
  background-color: red;
  color: white;
}

.drop{
  width: 100%;
}

@media (max-width: 768px){
  .team-worker-section-card{
    margin: 1rem -2rem 1rem -2rem;
  }

  .save-button,
  .cancel-button,
  .delete-button {
    margin: 0.5rem 0 0.5rem 0;
    width: 100%;
  }
}
</style>