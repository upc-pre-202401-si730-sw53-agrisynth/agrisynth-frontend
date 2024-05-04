<script>
export default {
  name: 'home'
}
</script>

<template>
  <pv-card class="card">
    <template #title>
      <h1 style="margin-bottom: 50px; margin-top: 30px;">Welcome</h1>
    </template>
    <template #content>
      <div>
        <pv-button class="large_button" icon="pi pi-sign-in" label="Sign in" severity="primary"
                   @click="$router.push('account/sign-in')"></pv-button>
      </div>
      <br>
      <div>
        <pv-button class="large_button" icon="pi pi-user-plus" label="Register" severity="primary"
                   @click="$router.push('account/register')"></pv-button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.large_button {
  width: 50%;
  height: 50px;
  background-color: #3C5A64;
  transition-duration: 0.2s;
}

.large_button:hover {
  background-color: #ffffff;
  color: black;
}

.card{
  width: 30rem;
  height: 300px;
  text-align: center;
  margin-top: 30vh;
  margin-left: 25vw;
  overflow: hidden;
  background-color: #95C8BC;
}
/*Responsive*/
@media (max-width: 768px){
  .card {
    width: 20rem;
    margin-left: 67px;
  }
}
</style>