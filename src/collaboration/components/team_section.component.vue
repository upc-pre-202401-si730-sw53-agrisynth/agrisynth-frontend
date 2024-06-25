<script>
export default{
  name:'team-section',

  data(){
    return{
      isAddTeamDialogVisible: false,
      editingTeam: false,
      localTeamForm: { ...this.teamForm },
    }
  },

  props: {
    fetchData: Function,
    teams: Array,
    teamForm: {
      type: Object,
      required: true,
    },

    //Team Service
    teamApiService: {
      type: Object,
      required: true,
    }
  },

  methods: {
    callFetchData(){
      if (this.fetchData) {
        this.fetchData();
      }
    },

    async mounted() {
      await this.callFetchData();
    },

    async submitTeam(){
      try {
        if (this.editingTeam) {
          await this.teamApiService.updateTeam(this.teamForm.value.id, this.localTeamForm);
        } else {
          await this.teamApiService.createTeam(this.localTeamForm);
        }
        await this.callFetchData();
        this.cancelEditTeam();
      } catch (error) {
        console.error('Error submitting team:', error);
      }
    },

    editTeam (team) {
      this.teamForm.value = { ...team };
      this.editingTeam = true;
      this.isAddTeamDialogVisible = true;
    },

    cancelEditTeam() {
      this.teamForm.value = { id: null, name: '' };
      this.editingTeam = false;
      this.isAddTeamDialogVisible = false;
    },

    async deleteTeam(id) {
      try {
        await this.teamApiService.deleteTeam(id);
        await this.callFetchData();
      } catch (error) {
        console.error('Error deleting team:', error);
      }
    },

  },
}
</script>

<template>
  <pv-card class="team-section-card">
    <template #title>
      <div class="title-container">
        <h1 class="title">Teams</h1>
        <pv-button label="Add" class="add-button" @click="isAddTeamDialogVisible = true" />
      </div>
    </template>
    <template #content>
      <pv-data-table :value="teams" showGridlines tableStyle="width:100%">
        <pv-column field="name" header="Name" style="width:70%"></pv-column>
        <pv-column header="Actions" style="width:30%; text-align: center">
          <template #body="slotProps">
            <pv-button label="Edit" class="edit-button" @click="editTeam(slotProps.data)" />
            <pv-button label="Delete" class="delete-button" @click="deleteTeam(slotProps.data.id)" />
          </template>
        </pv-column>
      </pv-data-table>
    </template>
  </pv-card>

  <pv-dialog v-model:visible="isAddTeamDialogVisible" modal @md-closed="cancelEditTeam" :draggable="false" header="Team">
    <form @submit.prevent="submitTeam">
      <div class="field">
        <label for="teamName" class="font-semibold">Team Name</label>
        <br>
        <pv-input-text id="teamName" v-model="localTeamForm.name" required />
      </div>
      <div class="button-group">
        <pv-button type="button" class="cancel-button" label="Cancel" @click="cancelEditTeam" />
        <pv-button type="submit" class="save-button" label="Save" />
      </div>
    </form>
  </pv-dialog>

</template>

<style scoped>
.team-section-card{
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

.edit-button,
.save-button {
  background-color: lightgreen;
  color: white;
  width: 25%;
}

.cancel-button,
.delete-button {
  background-color: red;
  color: white;
  width: 25%;
}

@media (max-width: 768px){
  .team-section-card{
    margin: 1rem -2rem 1rem -2rem;
  }

  .edit-button,
  .save-button,
  .cancel-button,
  .delete-button {
    margin: 0.5rem 0 0.5rem 0;
    width: 100%;
  }
}
</style>