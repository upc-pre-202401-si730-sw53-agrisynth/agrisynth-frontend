<script>
export default{
  name: 'Page-Not-Found',
}
</script>

<template>
    <div class="center">
      <h1>Page not found</h1>
      <pv-button @click="$router.push('/')">
          <h3 class="text">Go Home</h3>
      </pv-button>
    </div>

</template>

<style scoped>
.center{
  margin-top: 40vh;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.text{
  color: white;
}

@media (max-width: 768px){
  .center{
    margin-top: 45vh;
  }
}


</style>