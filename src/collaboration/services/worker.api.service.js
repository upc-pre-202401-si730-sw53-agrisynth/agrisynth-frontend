import http from "@/shared/services/http-common.js";

export class WorkerApiService{
    endpoint = '/workers';
    getAllWorkers(){
        return http.get(this.endpoint);
    }

    getWorkerById(workerId){
        return http.get(`${this.endpoint}/${workerId}`);
    }

    createWorker(workerData){
        return http.post(this.endpoint, workerData);
    }

    updateWorker(workerId, workerData){
        return http.put(`${this.endpoint}/${workerId}`, workerData);
    }

    deleteWorker(workerId) {
        return http.delete(`${this.endpoint}/${workerId}`);
    }
}