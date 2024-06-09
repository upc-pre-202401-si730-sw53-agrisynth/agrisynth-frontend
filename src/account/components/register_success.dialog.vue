<script>
export default{
  name: "register_dialog",
}
</script>

<template>
  <pv-dialog modal header="Now create a Password">
    <div style="text-align:center">
      <span class="p-text-secondary block mb-5">
        Your account details have been validated
      </span>
      <br>
      <pv-button label="Create Password" severity="Success" style="margin-top: 20px;"
                 @click="$router.push('create-password')"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>