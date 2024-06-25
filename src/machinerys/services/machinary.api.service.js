import http from "@/shared/services/http-common.js";

export class MachineryApiService{
  endpoint = '/machinerys';
  getAllMachinery(){
    return http.get(this.endpoint);
  }
}
