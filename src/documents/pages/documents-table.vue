<script>
import { defineComponent, ref } from "vue";
import {DocumentApiService} from "@/documents/services/document-api.service.js"
import Resource_creation_dialog from "@/resources/components/resource-creation.dialog.vue";
import DocumentsUploadDialog from "@/documents/components/documents_upload.dialog.vue";
import DocumentsEditDialog from "@/documents/components/documents_edit.dialog.vue";
import DocumentsDeleteDialog from "@/documents/components/documents_delete.dialog.vue";
export default defineComponent({
  name: "DocumentsTable",
  components: {DocumentsDeleteDialog, DocumentsUploadDialog, Resource_creation_dialog, DocumentsEditDialog},

  data() {
    return {
      documents: [],
      selectedDocument: null,
      isEditDialogVisible: false,
      isUploadDialogVisible: false,
      isDeleteDialogVisible: false,
      newDocumentName: "",
      refresh: ref(false),

      //Services
      documentService: null,

    };
  },
  async mounted() {
    this.documentService = new DocumentApiService();
    await this.fetchDocuments();
  },
  methods: {
    async fetchDocuments() {
      try {
        const response = await this.documentService.getAllDocuments();
        this.documents = response.data;
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    },

    openUploadDialog() {
      this.isUploadDialogVisible = true;
    },

    closeDialog() {
      this.isUploadDialogVisible = false;
      this.newDocumentName = "";
    },

    editDocument(document) {
      this.selectedDocument = document;
      this.newDocumentName = document.name;
      this.isEditDialogVisible = true;
    },
    async confirmDeleteDocument(document) {
      this.selectedDocument = document;
      this.isDeleteDialogVisible = true;
    },

    downloadDocument(document) {
      const link = document.createElement('a');
      link.href = document.url;
      link.download = document.name;
      link.click();
    },

    updateDocumentName(newName){
      this.newDocumentName = newName;
    }
  },
});
</script>

<template>
  <div class="main-content">
    <pv-card class="documents-card">
      <template #title>
        <div class="title-container">
          <h1 class="title">Document Management</h1>
          <pv-button label="Upload Document" icon="pi pi-plus-circle" class="upload-button" @click="openUploadDialog"/>
        </div>
      </template>
      <template #content>
        <pv-data-table :value="documents" showGridlines style="width: 100%">
          <pv-column field="name" header="Document Name" style="width:80%"></pv-column>
          <pv-column header="Options" style="width:20%">
            <template #body="slotProps">
              <div class="options">
                <pv-button icon="pi pi-pencil" style="background-color: lightgreen;" class="option-buttons"
                           @click="editDocument(slotProps.data)"/>
                <pv-button icon="pi pi-trash" style="background-color: red;" class="option-buttons"
                           @click="confirmDeleteDocument(slotProps.data.id)"/>
                <pv-button icon="pi pi-download" style="background-color: lightblue;" class="option-buttons"
                           @click="downloadDocument(slotProps.data)"/>
              </div>
            </template>
          </pv-column>
        </pv-data-table>
      </template>
    </pv-card>
  </div>

    <!--Document Upload Dialog -->
    <documents-upload-dialog v-model:visible="isUploadDialogVisible" :fetchDocuments="fetchDocuments"
                             @update="updateDocumentName" @close="isUploadDialogVisible = false"
                              :documentService="documentService"></documents-upload-dialog>

    <!--Document Edit Dialog -->
    <documents-edit-dialog v-model:visible="isEditDialogVisible" :fetchDocuments="fetchDocuments"
                           :newDocumentName="newDocumentName" :selectedDocument="selectedDocument"
                           @update="updateDocumentName" @close="isEditDialogVisible = false"
                           :documentService="documentService"></documents-edit-dialog>

    <!--Document Delete Dialog -->
    <documents-delete-dialog v-model:visible="isDeleteDialogVisible" :fetchDocuments="fetchDocuments"
                             :selectedDocument="selectedDocument"
                             @update="updateDocumentName" @close="isDeleteDialogVisible = false"
                             :documentService="documentService"></documents-delete-dialog>

    <!--To do(maybe): Take out "dialog" from the name of these components -->
</template>

<style scoped>
.main-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.documents-card{
  margin: 1.5rem 0 1.5rem 0;
}

.title-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.title{
  color: #4CAF50;
}

.upload-button{
  background-color: lightgreen;
  color: white;
}

.options{
  display:flex;
  justify-content: center;
  gap: 1rem;
}

.option-buttons{
  color: white;
  padding: 0.5rem;
}

@media (max-width: 768px) {

  .main-content{
    padding: 0.1rem 0.2rem 3rem 0.2rem;
  }

  .title-container{
    display: block;
    text-align: center;
  }

  .upload-button{
    padding: 1rem;
    width: 100%;
  }

  .options{
    display:block;
    gap: 0;
  }

  .option-buttons{
    color: white;
    margin-bottom: 1rem;
  }
}
</style>
