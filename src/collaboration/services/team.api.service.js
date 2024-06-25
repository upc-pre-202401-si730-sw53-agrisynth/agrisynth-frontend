import http from "@/shared/services/http-common.js";

export class TeamApiService{
    endpoint = '/teams';
    getAllTeams(){
        return http.get(this.endpoint);
    }

    getTeamById(teamId){
        return http.get(`${this.endpoint}/${teamId}`);
    }

    createTeam(teamData){
        return http.post(this.endpoint, teamData);
    }

    updateTeam(teamId, teamData){
        return http.put(`${this.endpoint}/${teamId}`, teamData);
    }

    deleteTeam(teamId) {
        return http.delete(`${this.endpoint}/${teamId}`);
    }
}
