<script>
export default{
  name: 'documents-delete-dialog',

  data(){
    return{
      isDialogVisible: false,
    }
  },

  props: {
    selectedDocument: null,
    fetchDocuments: Function,

    //Document Service
    documentService: {
      type: Object,
      required: true,
    }
  },
  watch: {
    selectedDocument(newValue) {
      this.localSelectedDocument = newValue;
    }
  },

  methods:{
    async deleteDocument(documentId) {
      try {
        await this.documentService.deleteDocument(documentId);
        await this.fetchDocuments();
        this.closeDialog();
      } catch (error) {
        console.error(`Error deleting document with ID ${documentId}:`, error);
      }
    },

    closeDialog() {
      this.isDialogVisible = false;
      this.$emit('close');
    },

  }

}
</script>

<template>
  <pv-dialog class="pv-dialog" modal :draggable="false" v-model:visible="isDialogVisible"
             @close="closeDialog" header="Delete Document">
    <div class="flex align-items-center gap-3 mb-3">
      <p>Are you sure you want to delete this document?</p>
    </div>
    <div class="flex justify-content-end gap-2">
      <pv-button label="Delete Document" style="background-color: red; color: white; padding: 0.5rem"
                 @click="deleteDocument(selectedDocument)"></pv-button>
      <pv-button label="Cancel" style="background-color: white; color: lightgreen; padding: 0.5rem"
                 @click="closeDialog"></pv-button>
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