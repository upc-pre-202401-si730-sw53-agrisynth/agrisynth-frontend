<script>
export default{
  name: "sign_in_success.dialog",
}
</script>

<template>
  <pv-dialog modal header="Success">
    <div style="text-align:center; margin-bottom:200px;">
      <div>
        <span style="">
        Welcome back!
      </span>
      </div>
      <div>
        <pv-button label="Enter" severity="Success" style="margin-top: 20px;"
                   @click="$router.push('/')"></pv-button>
      </div>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>