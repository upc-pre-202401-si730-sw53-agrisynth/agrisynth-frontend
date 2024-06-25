<script>
export default{
  name: 'documents-upload-dialog',

  data(){
    return{
      isDialogVisible: false,
      localNewDocumentName: "",
      file: null,
    }
  },

  props: {
    fetchDocuments: Function,

    //Services
    documentService: {
      type: Object,
      required: true,
    }

  },

  methods: {
    async handleFileUpload() {
      if (this.file && this.localNewDocumentName) {
        try {
          const formData = new FormData();
          formData.append("file", this.file);
          formData.append("name", this.localNewDocumentName);
          formData.append("type", this.file.type);
          formData.append("url", `/uploads/${this.file.name}`);

          for (let pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
          }

          await this.documentService.uploadDocument(formData);
          await this.callFetchDocuments();
          this.closeDialog();
        } catch (error) {
          console.error("Error uploading document:", error);
        }
      } else {
        console.error("File or document name is missing");
      }
    },

    callFetchDocuments(){
      if (this.fetchDocuments) {
        this.fetchDocuments();
      }
    },

    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    closeDialog() {
      this.isDialogVisible = false;
      this.$emit('close');
    }
  }
}
</script>

<template>
    <pv-dialog class="pv-dialog" modal :draggable="false" v-model:visible="isDialogVisible"
               @close="closeDialog" header="Upload Document">
      <div class="flex flex-column align-items-start gap-2 mb-3">
        <label for="document-name" class="font-semibold">Document Name</label>
        <pv-input-text id="document-name" class="w-full" v-model="localNewDocumentName" autocomplete="off" />
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
</template>

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
</style>