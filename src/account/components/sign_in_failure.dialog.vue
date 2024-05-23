<script>
export default{
  name: "sign_in_failure.dialog",
}
</script>

<template>
  <pv-dialog modal header="Error" :style="{ width: '30rem' }">
    <div style="text-align:center">
      <span class="p-text-secondary block mb-5">
        Incorrect Email or Password
      </span>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>