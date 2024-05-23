<template>
  <div class="main-content">
    <div class="p-grid">
      <!-- Teams Section -->
      <div class="p-col-12 p-md-6 p-lg-4">
        <div class="card">
          <div class="card-header">
            <h1 class="title">Teams</h1>
            <Button label="Add Team" class="add-button" @click="showAddTeamForm = true" />
          </div>
          <Dialog v-model:visible="showAddTeamForm" modal @md-closed="cancelEditTeam" :draggable="false" header="Add Team">
            <form @submit.prevent="submitTeam">
              <div class="field">
                <label for="teamName" class="font-semibold">Team Name</label>
                <InputText id="teamName" v-model="teamForm.name" required />
              </div>
              <div class="button-group">
                <Button type="button" class="cancel-button" label="Cancel" @click="cancelEditTeam" />
                <Button type="submit" class="save-button" label="Save" />
              </div>
            </form>
          </Dialog>
          <DataTable :value="teams" showGridlines tableStyle="width:100%">
            <Column field="name" header="Name"></Column>
            <Column header="Actions">
              <template #body="slotProps">
                <Button label="Edit" class="edit-button" @click="editTeam(slotProps.data)" />
                <Button label="Delete" class="delete-button" @click="deleteTeam(slotProps.data.id)" />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>

      <!-- Workers Section -->
      <div class="p-col-12 p-md-6 p-lg-4">
        <div class="card">
          <div class="card-header">
            <h1 class="title">Workers</h1>
            <Button label="Add Worker" class="add-button" @click="showAddWorkerForm = true" />
          </div>
          <Dialog v-model:visible="showAddWorkerForm" modal @md-closed="cancelEditWorker" :draggable="false" header="Add Worker">
            <form @submit.prevent="submitWorker">
              <div class="field">
                <label for="workerName" class="font-semibold">Worker Name</label>
                <InputText id="workerName" v-model="workerForm.name" required />
              </div>
              <div class="button-group">
                <Button type="button" class="cancel-button" label="Cancel" @click="cancelEditWorker" />
                <Button type="submit" class="save-button" label="Save" />
              </div>
            </form>
          </Dialog>
          <DataTable :value="workers" showGridlines tableStyle="width:100%">
            <Column field="name" header="Name"></Column>
            <Column header="Actions">
              <template #body="slotProps">
                <Button label="Edit" class="edit-button" @click="editWorker(slotProps.data)" />
                <Button label="Delete" class="delete-button" @click="deleteWorker(slotProps.data.id)" />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>

      <!-- Team Workers Section -->
      <div class="p-col-12 p-md-12 p-lg-4">
        <div class="card">
          <h1 class="title">Team Workers</h1>
          <Button label="Add Team Worker" class="add-button" @click="showAddTeamWorkerForm = true" />
          <Dialog v-model:visible="showAddTeamWorkerForm" modal @md-closed="cancelAddTeamWorker" :draggable="false" header="Add Team Worker">
            <form @submit.prevent="submitTeamWorker">
              <div class="field">
                <label for="team" class="font-semibold">Team</label>
                <Dropdown v-model="teamWorkerForm.teamId" :options="teams" optionLabel="name" placeholder="Select Team" required />
              </div>
              <div class="field">
                <label for="worker" class="font-semibold">Worker</label>
                <Dropdown v-model="teamWorkerForm.workerId" :options="workers" optionLabel="name" placeholder="Select Worker" required />
              </div>
              <div class="button-group">
                <Button type="button" class="cancel-button" label="Cancel" @click="cancelAddTeamWorker" />
                <Button type="submit" class="save-button" label="Save" />
              </div>
            </form>
          </Dialog>
          <DataTable :value="teamWorkers" showGridlines>
            <Column header="Team">
              <template #body="slotProps">
                {{ getTeamName(slotProps.data.teamId) }}
              </template>
            </Column>
            <Column header="Worker">
              <template #body="slotProps">
                {{ getWorkerName(slotProps.data.workerId) }}
              </template>
            </Column>
            <Column header="Actions">
              <template #body="slotProps">
                <Button label="Delete" class="delete-button" @click="deleteTeamWorker(slotProps.data.id)" />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import teamService from '../collaboration/services/team.api.service.js';
import workerService from '../collaboration/services/worker.api.service.js';
import teamWorkerService from '../collaboration/services/teamWorker.api.service.js';

export default {
  name: 'Collaboration',
  components: {
    Button,
    Dialog,
    InputText,
    Dropdown,
    DataTable,
    Column,
  },
  setup() {
    const teams = ref([]);
    const workers = ref([]);
    const teamWorkers = ref([]);
    const showAddTeamForm = ref(false);
    const showAddWorkerForm = ref(false);
    const showAddTeamWorkerForm = ref(false);
    const teamForm = ref({ id: null, name: '' });
    const workerForm = ref({ id: null, name: '' });
    const teamWorkerForm = ref({ teamId: '', workerId: '' });
    const editingTeam = ref(false);
    const editingWorker = ref(false);

    const fetchData = async () => {
      try {
        const [teamResponse, workerResponse, teamWorkerResponse] = await Promise.all([
          teamService.getAll(),
          workerService.getAll(),
          teamWorkerService.getAll()
        ]);
        teams.value = teamResponse.data;
        workers.value = workerResponse.data;
        teamWorkers.value = teamWorkerResponse.data;
        console.log('Teams:', teams.value);
        console.log('Workers:', workers.value);
        console.log('Team Workers:', teamWorkers.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getTeamName = (teamId) => {
      const team = teams.value.find(team => team.id === teamId);
      return team ? team.name : 'Unknown Team';
    };

    const getWorkerName = (workerId) => {
      const worker = workers.value.find(worker => worker.id === workerId);
      return worker ? worker.name : 'Unknown Worker';
    };

    const teamBodyTemplate = (rowData) => {
      const team = teams.value.find(team => team.id === rowData.teamId);
      return team ? team.name : 'Unknown Team';
    };

    const workerBodyTemplate = (rowData) => {
      const worker = workers.value.find(worker => worker.id === rowData.workerId);
      return worker ? worker.name : 'Unknown Worker';
    };

    const submitTeam = async () => {
      try {
        if (editingTeam.value) {
          await teamService.update(teamForm.value.id, teamForm.value);
        } else {
          await teamService.create(teamForm.value);
        }
        fetchData();
        cancelEditTeam();
      } catch (error) {
        console.error('Error submitting team:', error);
      }
    };

    const editTeam = (team) => {
      teamForm.value = { ...team };
      editingTeam.value = true;
      showAddTeamForm.value = true;
    };

    const cancelEditTeam = () => {
      teamForm.value = { id: null, name: '' };
      editingTeam.value = false;
      showAddTeamForm.value = false;
    };

    const deleteTeam = async (id) => {
      try {
        await teamService.remove(id);
        fetchData();
      } catch (error) {
        console.error('Error deleting team:', error);
      }
    };

    const submitWorker = async () => {
      try {
        if (editingWorker.value) {
          await workerService.update(workerForm.value.id, workerForm.value);
        } else {
          await workerService.create(workerForm.value);
        }
        fetchData();
        cancelEditWorker();
      } catch (error) {
        console.error('Error submitting worker:', error);
      }
    };

    const editWorker = (worker) => {
      workerForm.value = { ...worker };
      editingWorker.value = true;
      showAddWorkerForm.value = true;
    };

    const cancelEditWorker = () => {
      workerForm.value = { id: null, name: '' };
      editingWorker.value = false;
      showAddWorkerForm.value = false;
    };

    const deleteWorker = async (id) => {
      try {
        await workerService.remove(id);
        fetchData();
      } catch (error) {
        console.error('Error deleting worker:', error);
      }
    };

    const submitTeamWorker = async () => {
      try {
        const newTeamWorker = {
          teamId: teamWorkerForm.value.teamId.id,
          workerId: teamWorkerForm.value.workerId.id
        };
        await teamWorkerService.create(newTeamWorker);
        fetchData();
        cancelAddTeamWorker();
      } catch (error) {
        console.error('Error submitting team worker:', error);
      }
    };

    const cancelAddTeamWorker = () => {
      teamWorkerForm.value = { teamId: '', workerId: '' };
      showAddTeamWorkerForm.value = false;
    };

    const deleteTeamWorker = async (id) => {
      try {
        await teamWorkerService.remove(id);
        fetchData();
      } catch (error) {
        console.error('Error deleting team worker:', error);
      }
    };

    onMounted(fetchData);

    return {
      teams,
      workers,
      teamWorkers,
      showAddTeamForm,
      showAddWorkerForm,
      showAddTeamWorkerForm,
      teamForm,
      workerForm,
      teamWorkerForm,
      editingTeam,
      editingWorker,
      getTeamName,
      getWorkerName,
      submitTeam,
      editTeam,
      cancelEditTeam,
      deleteTeam,
      submitWorker,
      editWorker,
      cancelEditWorker,
      deleteWorker,
      submitTeamWorker,
      cancelAddTeamWorker,
      deleteTeamWorker,
      teamBodyTemplate,
      workerBodyTemplate,
    };
  }
};
</script>

<style scoped>
.main-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.cancel-button,
.delete-button {
  background-color: red;
  color: white;
}

.team-workers {
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>


