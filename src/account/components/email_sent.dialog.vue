<script>
export default{
  name: "email_sent.dialog",
}
</script>

<template>
  <pv-dialog modal header="Success" :style="{ width: '30rem' }">
    <div style="text-align:center">
      <span class="p-text-secondary block mb-5">
        An email has been sent to the email address provided
      </span>
      <br>
      <pv-button label="Ok" severity="warning" style="margin-top: 20px;"
                 @click="$router.push('/sign-in')"></pv-button>
    </div>
  </pv-dialog>
</template>

<style scoped>

</style>