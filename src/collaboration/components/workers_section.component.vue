<script>

export default{
  name:'workers-section',

  data(){
    return{
      isAddWorkerDialogVisible: false,
      editingWorker: false,
      localWorkerForm: { ...this.workerForm },
    }
  },

  props: {
    fetchData: Function,
    workers: Array,
    workerForm: {
      type: Object,
      required: true,
    },

    //Worker Service
    workerApiService: {
      type: Object,
      required: true,
    }
  },

  async mounted() {
    await this.callFetchData();
  },

  methods: {
    callFetchData(){
      if (this.fetchData) {
        this.fetchData();
      }
    },

    async submitWorker() {
      try {
        if (this.editingWorker){
          await this.workerApiService.updateWorker(this.workerForm.value.id, this.localWorkerForm);
        } else {
          await this.workerApiService.createWorker(this.localWorkerForm);
        }
        await this.callFetchData();
        this.cancelEditWorker();
      } catch (error) {
        console.error('Error submitting worker:', error);
      }
    },

    editWorker(worker) {
      this.workerForm.value = { ...worker };
      this.editingWorker = true;
      this.isAddWorkerDialogVisible = true;
    },

    cancelEditWorker() {
      this.workerForm.value = { id: null, name: '' };
      this.editingWorker = false;
      this.isAddWorkerDialogVisible = false;
    },

    async deleteWorker(id) {
      try {
        await this.workerApiService.deleteWorker(id);
        await this.callFetchData();
      } catch (error) {
        console.error('Error deleting worker:', error);
      }
    },

  },

}
</script>

<template>
  <pv-card class="worker-section-card">
    <template #title>
      <div class="title-container">
        <h1 class="title">Workers</h1>
        <pv-button label="Add" class="add-button" @click="isAddWorkerDialogVisible = true" />
      </div>
    </template>
    <template #content>
      <pv-data-table :value="workers" showGridlines tableStyle="width:100%">
        <pv-column field="name" header="Name" style="width:70%"></pv-column>
        <pv-column header="Actions" style="width:30%; text-align: center">
          <template #body="slotProps">
            <pv-button label="Edit" class="edit-button" @click="editWorker(slotProps.data)" />
            <pv-button label="Delete" class="delete-button" @click="deleteWorker(slotProps.data.id)" />
          </template>
        </pv-column>
      </pv-data-table>
    </template>
  </pv-card>

  <pv-dialog v-model:visible="isAddWorkerDialogVisible" modal @md-closed="cancelEditWorker" :draggable="false" header="Add Worker">
    <form @submit.prevent="submitWorker">
      <div class="field">
        <label for="workerName" class="font-semibold">Worker Name</label>
        <br>
        <pv-input-text id="workerName" v-model="localWorkerForm.name" required />
      </div>
      <div class="button-group">
        <pv-button type="button" class="cancel-button" label="Cancel" @click="cancelEditWorker" />
        <pv-button type="submit" class="save-button" label="Save" />
      </div>
    </form>
  </pv-dialog>

</template>

<style scoped>
.worker-section-card{
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
  .worker-section-card{
    margin: 1rem -2rem 1rem -2rem;
  }

  .edit-button,
  .save-button,
  .cancel-button,
  .delete-button {
    margin: 0.5rem 0 0.5rem 0;
    width: 100%;
  }

  .add-button{
    display:none;
  }
}

</style>