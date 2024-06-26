<script>
import {TeamApiService} from '@/collaboration/services/team.api.service.js';
import {WorkerApiService} from '@/collaboration/services/worker.api.service.js';
import {TeamWorkerApiService} from '@/collaboration/services/teamWorker.api.service.js';
import TeamSection from "@/collaboration/components/team_section.component.vue";
import WorkersSection from "@/collaboration/components/workers_section.component.vue";
import TeamWorkersSection from "@/collaboration/components/team_workers_section.component.vue";

export default {
  name: 'collaboration',
  components: {TeamWorkersSection, WorkersSection, TeamSection},

  data(){
    return{
      teams : [],
      workers: [],
      teamWorkers : [],
      teamForm: {id: null, name: ''},
      workerForm: {id: null, name: ''},
      teamWorkerForm : {id: null, name: ''},

      //Collaboration services
      teamApiService: null,
      workerApiService: null,
      teamWorkerApiService: null,

    }
  },

  methods: {
    async fetchData() {
      try {
        const [teamResponse, workerResponse, teamWorkerResponse] = await Promise.all([
          this.teamApiService.getAllTeams(),
          this.workerApiService.getAllWorkers(),
          this.teamWorkerApiService.getAllTeamWorkers()
        ]);
        this.teams.value = teamResponse.data;
        this.workers.value = workerResponse.data;
        this.teamWorkers.value = teamWorkerResponse.data;
        console.log(this.teams.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },

  async mounted() {
    this.teamApiService = new TeamApiService();
    this.workerApiService = new WorkerApiService();
    this.teamWorkerApiService = new TeamWorkerApiService();
    await this.fetchData();
  },
};
</script>

<template>
  <div class="main-content">
    <div class="p-grid">
      <!-- Teams Section -->
      <team-section :fetchData="fetchData" :teams="teams.value" :teamForm="teamForm" :teamApiService="teamApiService"></team-section>
      <!-- Workers Section -->
      <workers-section :fetchData="fetchData" :workers="workers.value" :workerForm="workerForm" :workerApiService="workerApiService"></workers-section>
      <!-- Team Workers Section -->
      <team-workers-section :fetchData="fetchData" :teams="teams.value" :workers="workers.value"
                            :teamWorkers="teamWorkers.value" :teamWorkerForm="teamWorkerForm"
                            :teamWorkerApiService="teamWorkerApiService"></team-workers-section>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>