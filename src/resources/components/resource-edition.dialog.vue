<script>
import {Resource} from "@/resources/model/resource.entity.js";

export default{
  name: 'resource_edition_dialog',
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

  return: {
    name: '',
    quantity: 0,
    type: '',
    purchase: '',
    sale: '',
    imageUrl: '',
  },

  methods: {
    closeDialog() {
      this.$emit('update:visible', false);
    },

    editResource(){
      let newResourceData = new Resource(this.name, this.quantity, this.type, this.purchase, this.sale, this.imageUrl);
      this.resourceService.updateResource(this.resourceId, newResourceData);
      this.closeDialog();
    }
  }
}
</script>

<template>
  <pv-dialog :visible="visible" modal :draggable="false" header="Edit Resource"
             :style="{ width: '25rem' }" @update:visible="$emit('update:visible', $event)">
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="name" class="font-semibold">Name</label>
      <pv-input-text id="name" class="w-full" autocomplete="off" v-model="this.name" />
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="quantity" class="font-semibold">Amount</label>
      <pv-input-text id="quantity" class="w-full" autocomplete="off" v-model="this.quantity"/>
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="type" class="font-semibold">Type</label>
      <pv-input-text id="type" class="w-full" autocomplete="off" v-model="this.type"/>
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="quantity" class="font-semibold">Purchase Price</label>
      <pv-input-text id="quantity" class="w-full" autocomplete="off" v-model="this.purchase"/>
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="type" class="font-semibold ">Sale Price</label>
      <pv-input-text id="type" class="w-full" autocomplete="off" v-model="this.sale"/>
    </div>
    <div class="flex justify-content-end gap-2">
      <pv-button type="button" style="background-color:red;color:white;padding:0.5rem" label="Cancelar"
                 severity="secondary" @click="closeDialog"></pv-button>
      <pv-button type="button" style="background-color:lightgreen;color:white;padding:0.5rem" label="Guardar"
                 @click="editResource"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>
</style>