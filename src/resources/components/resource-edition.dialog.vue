<script>
export default{
  name: 'resource_edition_dialog',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<template>
  <pv-dialog :visible="visible" modal :draggable="false" header="Edit Resource"
             :style="{ width: '25rem' }" @update:visible="$emit('update:visible', $event)">
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="name" class="font-semibold">Name</label>
      <pv-input-text id="name" class="w-full" autocomplete="off" />
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="quantity" class="font-semibold">Amount</label>
      <pv-input-text id="quantity" class="w-full" autocomplete="off" />
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="type" class="font-semibold">Type</label>
      <pv-input-text id="type" class="w-full" autocomplete="off" />
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="quantity" class="font-semibold">Purchase Price</label>
      <pv-input-text id="quantity" class="w-full" autocomplete="off" />
    </div>
    <div class="flex flex-column align-items-start gap-2 mb-3">
      <label for="type" class="font-semibold ">Sale Price</label>
      <pv-input-text id="type" class="w-full" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
      <pv-button type="button" style="background-color:red;color:white;padding:0.5rem" label="Cancelar"
                 severity="secondary" @click="closeDialog"></pv-button>
      <pv-button type="button" style="background-color:lightgreen;color:white;padding:0.5rem" label="Guardar"
                 @click="closeDialog"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>
</style>