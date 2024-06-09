<script>
export default {
  name: 'home'
}
</script>

<template>
    <div class="main-content">
      <pv-card class="card">
        <template #title>
          <h1 class="title">Welcome</h1>
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
    </div>


</template>

<style scoped>
.main-content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.large_button {
  width: 50%;
  height: 50px;
  transition-duration: 0.2s;
}

.card{
  width: 30rem;
  height: 150%;
  text-align: center;
  overflow: hidden;
  margin-top: 25vh;
  background-color: #fcfcfc;
}

.title{
  color: #10b880;
}

/*Responsive*/
@media (max-width: 768px){
  .card {
    width: 20rem;
  }
}
</style>