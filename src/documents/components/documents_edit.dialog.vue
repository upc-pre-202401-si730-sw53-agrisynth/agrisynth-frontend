<script>

export default {
  name: 'documents-edit-dialog',

  props: {
    newDocumentName: "",
    selectedDocument: null,
    fetchDocuments: Function,

    //Document Service
    documentService: {
      type: Object,
      required: true,
    }
  },

  data(){
    return{
      isDialogVisible: false,
      localNewDocumentName: this.newDocumentName,
      localSelectedDocument: this.selectedDocument,
    }
  },

  watch: {
    newDocumentName(newValue) {
      this.localNewDocumentName = newValue;
    },
    selectedDocument(newValue) {
      this.localSelectedDocument = newValue;
    }
  },

  methods:{
    async updateDocumentName(documentId) {
      try {
        await this.documentService.updateDocument(documentId, { name: this.localNewDocumentName });
        await this.callFetchDocuments();
        this.$emit('update:newDocumentName',this.localNewDocumentName);
        this.$emit('update:selectedDocument',this.localSelectedDocument);
        this.closeDialog();
      } catch (error) {
        console.error(`Error updating document with ID ${documentId}:`, error);
      }
    },
    closeDialog() {
      this.$emit('close');
    },

    callFetchDocuments(){
      if (this.fetchDocuments) {
        this.fetchDocuments();
      }
    }
  }

}
</script>

<template>
  <pv-dialog class="pv-dialog" modal :draggable="false" v-model:visible="isDialogVisible" @close="closeDialog" header="Edit Document">
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="new-name" class="font-semibold">New Name</label>
      <pv-input-text id="new-name" class="w-full" v-model="localNewDocumentName" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
      <pv-button type="button" style="background-color: red; color: white; padding: 0.5rem" label="Cancel"
                 @click="closeDialog"></pv-button>
      <pv-button type="button" style="background-color: lightgreen; color: white; padding: 0.5rem" label="Save"
                 @click="updateDocumentName(localSelectedDocument.id)"></pv-button>
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