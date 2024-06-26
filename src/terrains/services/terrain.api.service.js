import http from "@/shared/services/http-common.js";

export class TerrainApiService{
  endpoint = "/terrains";
  getAllTerrains(){
    return http.get(this.endpoint);
  }

  getTerrainById(terrainId) {
    return http.get(`${this.endpoint}/${terrainId}`);
  }

  createTerrain(terrainData){
    return http.post(this.endpoint, terrainData);
  }

  updateTerrain (terrainId, terrainData){
    return http.put(`${this.endpoint}/${terrainId}`, terrainData);
  }

  deleteTerrain(terrainId){
    return http.delete(`${this.endpoint}/${terrainId}`)
  }

}