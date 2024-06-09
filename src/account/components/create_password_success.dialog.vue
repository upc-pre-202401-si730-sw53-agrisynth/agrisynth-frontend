<script>
export default{
  name: "success_dialog",
}
</script>

<template>
  <pv-dialog modal header="Success!">
    <div style="text-align:center">
      <span class="p-text-secondary block mb-5">
        Your account has been created successfully!
      </span>
      <br>
      <pv-button label="Select Plan" severity="Success" style="margin-top: 20px;"
                 @click="$router.push('subscription')"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>