import http from '@/shared/services/http-common.js'


export class DocumentApiService{
    endpoint = '/documents';

    getAllDocuments() {
        return http.get(this.endpoint);
    }

    uploadDocument(){
        return http.post(this.endpoint);
    }

    updateDocument(){
        return http.put(this.endpoint);
    }

    deleteDocument(){
        return http.delete(this.endpoint);
    }
}
