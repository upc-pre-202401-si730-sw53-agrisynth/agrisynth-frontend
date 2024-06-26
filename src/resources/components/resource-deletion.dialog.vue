<script>
import {ResourceApiService} from "@/resources/services/resource.api.service.js";

export default{
  name: 'resource_deletion_dialog',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    resourceService:{
      type: Object,
      required: true,
    },

    resourceData: {
      type: Object,
      required: true,
    },

    resourceId: {
      type: [String, Number],
      required: true
    },
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false);
    },

    resourceDeletion(){
      this.resourceService.deleteResource(this.resourceId, this.resourceData);
      this.closeDialog();
    }
  }
}
</script>

<template>
  <pv-dialog :visible="visible" modal :draggable="false" header="Delete Resource"
             :style="{ width: '25rem' }" @update:visible="$emit('update:visible', $event)">
    <div class="flex align-items-center gap-3 mb-3">
      <p>Are you sure you want to delete this resource?</p>
    </div>
    <div class="flex justify-content-end gap-2">
      <pv-button severity="danger" style="background-color:red;color:white;padding:0.5rem" label="Yes"
                 @click="resourceDeletion"></pv-button>
      <pv-button label="No" style="background-color:lightgreen;color:white;padding:0.5rem" @click="closeDialog"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>
</style>