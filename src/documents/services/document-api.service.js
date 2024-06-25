import http from '@/shared/services/http-common.js'


export class DocumentApiService{
    endpoint = '/documents';

    getAllDocuments() {
        return http.get(this.endpoint);
    }

    uploadDocument(documentData){
        return http.post(this.endpoint, documentData);
    }

    updateDocument(documentId, documentData){
        return http.put(`${this.endpoint}/${documentId}`, documentData);
    }

    deleteDocument(documentId){
        return http.delete(`${this.endpoint}/${documentId}`);
    }
}
