import http from "@/shared/services/http-common.js";

export class TeamWorkerApiService{
    endpoint = '/team-workers';
    getAllTeamWorkers(){
        return http.get(this.endpoint);
    }

    getTeamWorkerById(teamWorkerId){
        return http.get(`${this.endpoint}/${teamWorkerId}`);
    }

    createTeamWorker(teamWorkerData){
        return http.post(this.endpoint, teamWorkerData);
    }

    updateTeamWorker(teamWorkerId, teamWorkerData){
        return http.put(`${this.endpoint}/${teamWorkerId}`, teamWorkerData);
    }

    deleteTeamWorker(teamWorkerId) {
        return http.delete(`${this.endpoint}/${teamWorkerId}`);
    }

}