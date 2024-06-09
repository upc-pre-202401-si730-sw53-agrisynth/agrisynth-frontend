<script>
import teamService from '@/collaboration/services/team.api.service.js';
import workerService from '@/collaboration/services/worker.api.service.js';
import teamWorkerService from '@/collaboration/services/teamWorker.api.service.js';
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
    }
  },

  methods: {
    async fetchData() {
      try {
        const [teamResponse, workerResponse, teamWorkerResponse] = await Promise.all([
          teamService.getAll(),
          workerService.getAll(),
          teamWorkerService.getAll()
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
    await this.fetchData();
  },
};
</script>

<template>
  <div class="main-content">
    <div class="p-grid">
      <!-- Teams Section -->
      <team-section :fetchData="fetchData" :teams="teams.value" :teamForm="teamForm"></team-section>
      <!-- Workers Section -->
      <workers-section :fetchData="fetchData" :workers="workers.value" :workerForm="workerForm"></workers-section>
      <!-- Team Workers Section -->
      <team-workers-section :fetchData="fetchData" :teams="teams.value" :workers="workers.value"
                            :teamWorkers="teamWorkers.value" :teamWorkerForm="teamWorkerForm"></team-workers-section>
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