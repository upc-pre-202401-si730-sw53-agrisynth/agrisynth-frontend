import http from '@/shared/services/http-common.js'

// Método para obtener todos los terrenos

export class ResourceApiService{
  endpoint = '/resource-items';
  getAllResources(){
    return http.get(this.endpoint);
  }

  getResourceById(resourceId){
    return http.get(`${this.endpoint}/${resourceId}`)
  }

  createResource(resourceData){
    return http.post(this.endpoint,resourceData);
  }

  updateResource(resourceId,resourceData){
    return http.put(`${this.endpoint}/${resourceId}`,resourceData);
  }

  deleteResource(resourceId){
    return http.delete(`${this.endpoint}/${resourceId}`);
  }
}
