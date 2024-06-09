<script>
export default{
  name: 'configuration_dialog',
}
</script>

<template>
  <pv-dialog modal header="Success!">
    <div style="text-align:center">
      <span class="p-text-secondary block mb-5">
        All changes have been saved
      </span>
      <br>
      <pv-button label="Ok" severity="warning" style="margin-top: 20px;"
                 @click="$router.push('terrains')"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>