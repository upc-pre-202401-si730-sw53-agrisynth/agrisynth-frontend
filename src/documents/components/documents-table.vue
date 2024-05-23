<template>
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 1rem">
    <h1 style="margin: 0 ">Document Management</h1>
    </div>
    <pv-data-table :value="documents" showGridlines tableStyle="width:100%">
      <pv-column field="name" header="Document Name"></pv-column>
      <pv-column header="Options" >
        <template #body="slotProps">
          <div class="flex justify-content-center gap-2">
            <pv-button icon="pi pi-pencil" style="background-color: lightgreen; color: white; padding: 0.5rem"
                       @click="editDocument(slotProps.data)"/>
            <pv-button icon="pi pi-trash" style="background-color: red; color: white; padding: 0.5rem"
                       @click="confirmDeleteDocument(slotProps.data.id)"/>
            <pv-button icon="pi pi-download" style="background-color: lightblue; color: white; padding: 0.5rem"
                       @click="downloadDocument(slotProps.data)"/>
          </div>
        </template>
      </pv-column>
    </pv-data-table>
    <div class="spacer"></div>
    <div class="card flex justify-content-center">
      <pv-button label="Upload Document" style="background-color: lightgreen; color: white; padding: 1rem"
                 @click="openUploadDialog" />
      <pv-dialog class="pv-dialog" v-model:visible="dialogVisibleUpload" modal @md-closed="closeDialog" :draggable="false"
                 header="Upload Document">
        <div class="flex flex-column align-items-start gap-2 mb-3">
          <label for="document-name" class="font-semibold">Document Name</label>
          <pv-input-text id="document-name" class="w-full" v-model="newDocumentName" autocomplete="off" />
        </div>
        <div class="flex flex-column align-items-start gap-2 mb-3">
          <label for="file" class="font-semibold">Select File</label>
          <input type="file" id="file" @change="handleFileChange" />
        </div>
        <div class="flex justify-content-end gap-2">
          <pv-button type="button" style="background-color: red; color: white; padding: 1rem" label="Cancel"
                     @click="closeDialog"></pv-button>
          <pv-button type="button" style="background-color: lightgreen; color: white; padding: 1rem" label="Upload"
                     @click="handleFileUpload"></pv-button>
        </div>
      </pv-dialog>
    </div>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisibleEdit" modal @md-closed="closeEditDialog" :draggable="false" header="Edit Document">
      <div class="flex flex-column align-items-start gap-2 mb-3">
        <label for="new-name" class="font-semibold">New Name</label>
        <pv-input-text id="new-name" class="w-full" v-model="newDocumentName" autocomplete="off" />
      </div>
      <div class="flex justify-content-end gap-2">
        <pv-button type="button" style="background-color: red; color: white; padding: 0.5rem" label="Cancel"
                   @click="closeEditDialog"></pv-button>
        <pv-button type="button" style="background-color: lightgreen; color: white; padding: 0.5rem" label="Save"
                   @click="updateDocumentName(selectedDocument.id)"></pv-button>
      </div>
    </pv-dialog>
    <pv-dialog class="pv-dialog" v-model:visible="dialogVisibleDelete" modal @md-closed="closeDeleteDialog" :draggable="false" header="Delete Document">
      <div class="flex align-items-center gap-3 mb-3">
        <p>Are you sure you want to delete this document?</p>
      </div>
      <div class="flex justify-content-end gap-2">
        <pv-button style="background-color: red; color: white; padding: 0.5rem" label="Yes"
                   @click="deleteDocument(selectedDocument)"></pv-button>
        <pv-button type="button" style="background-color: lightgreen; color: white; padding: 0.5rem" label="No"
                   @click="closeDeleteDialog"></pv-button>
      </div>
    </pv-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { getAllDocuments, uploadDocument, updateDocument, deleteDocument } from "@/documents/services/document-api.service";

export default defineComponent({
  name: "DocumentsTable",

  data() {
    return {
      documents: [],
      selectedDocument: null,
      dialogVisibleEdit: false,
      dialogVisibleUpload: false,
      dialogVisibleDelete: false,
      newDocumentName: "",
      file: null,
      refresh: ref(false),
    };
  },
  async mounted() {
    await this.fetchDocuments();
  },
  methods: {
    async fetchDocuments() {
      try {
        this.documents = await getAllDocuments();
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    },
    openUploadDialog() {
      this.dialogVisibleUpload = true;
    },
    closeDialog() {
      this.dialogVisibleUpload = false;
      this.newDocumentName = "";
      this.file = null;
    },
    closeEditDialog() {
      this.dialogVisibleEdit = false;
      this.newDocumentName = "";
    },
    closeDeleteDialog() {
      this.dialogVisibleDelete = false;
    },
    async handleFileUpload() {
      if (this.file && this.newDocumentName) {
        try {
          const formData = new FormData();
          formData.append("file", this.file);
          formData.append("name", this.newDocumentName);
          formData.append("type", this.file.type);
          formData.append("url", `/uploads/${this.file.name}`);

          await uploadDocument(formData);
          await this.fetchDocuments(); // Refresh the document list
          this.closeDialog();
        } catch (error) {
          console.error("Error uploading document:", error);
        }
      } else {
        console.error("File or document name is missing");
      }
    },
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    editDocument(document) {
      this.selectedDocument = document;
      this.newDocumentName = document.name;
      this.dialogVisibleEdit = true;
    },
    async confirmDeleteDocument(document) {
      this.selectedDocument = document;
      this.dialogVisibleDelete = true;
    },
    async deleteDocument(documentId) {
      try {
        await deleteDocument(documentId);
        await this.fetchDocuments();
        this.closeDeleteDialog();
      } catch (error) {
        console.error(`Error deleting document with ID ${documentId}:`, error);
      }
    },
    async updateDocumentName(documentId) {
      try {
        await updateDocument(documentId, { name: this.newDocumentName });
        await this.fetchDocuments();
        this.closeEditDialog();
      } catch (error) {
        console.error(`Error updating document with ID ${documentId}:`, error);
      }
    },
    downloadDocument(document) {
      const link = document.createElement('a');
      link.href = document.url;
      link.download = document.name;
      link.click();
    }
  },
});
</script>

<style scoped>
.pv-dialog {
  width: 100%;
  max-width: 30rem;
}

@media (max-width: 600px) {
  .pv-dialog {
    width: 100%;
    max-width: 20rem;
  }
}
.spacer {
  height: 40px;
}
h1 {
  color: #4caf50;
}
</style>
