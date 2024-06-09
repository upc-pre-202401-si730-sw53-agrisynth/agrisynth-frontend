<script>
export default{
  name: "email_sent.dialog",
}
</script>

<template>
  <pv-dialog modal header="Success">
    <div style="text-align:center">
      <span class="p-text-secondary block mb-5">
        An email has been sent to the email address provided
      </span>
      <br>
      <pv-button label="Ok" severity="Success" style="margin-top: 20px;"
                 @click="$router.push('/')"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>