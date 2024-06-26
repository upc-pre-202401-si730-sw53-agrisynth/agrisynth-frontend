<script>
import {Resource} from "@/resources/model/resource.entity.js";

export default{
  name: 'resource_creation_dialog',
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    resourceService:{
      type: Object,
      required: true,
    },
  },

  return: {
    //Resource Creation
    name: '',
    quantity: 0,
    type: '',
    purchase: '',
    sale: '',
    imageUrl: '',

    resourceData: {
      type: Object,
      required: false,
    }
  },

  methods: {
    closeDialog() {
      this.$emit('update:visible', false);
    },

    createResource(){
      this.resourceData = new Resource(this.name, this.quantity, this.type,this.purchase, this.sale, this.imageUrl);
      this.resourceService.createResource(this.resourceData);
      this.closeDialog();
    }
  }
}
</script>

<template>
  <pv-dialog :visible="visible" modal :draggable="false" header="Añadir datos"
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
      <pv-button type="button" style="background-color:red;color:white;padding:1rem" label="Cancel"
                 severity="secondary" @click="closeDialog"></pv-button>
      <pv-button type="button" style="background-color:lightgreen;color:white;padding:1rem" label="Save"
                 @click="createResource"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>
</style>