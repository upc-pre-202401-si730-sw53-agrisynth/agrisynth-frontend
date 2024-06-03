<script>
export default{
  name:'support_component',
}
</script>

<template>
  <pv-card class="card">
    <template #title>
      <h2 style="text-align: left; margin-bottom: 30px">Help and Support</h2>
    </template>

    <template #content>
      <div style="text-align: left">
        <h2 style="margin-bottom: 10px">Frequently asked questions</h2>
      </div>
      <div style="text-align: justify">
        <div style="margin-bottom: 10px">
          <h4>1. What type of information can I register in the web site</h4>
          <span> All users must register their first name, last name, phone number, ID,
          email address and a valid password in order to create a new account.</span>
        </div>
        <div style="margin-bottom: 10px">
          <h4>2. Does the web site offer crop planning tools?</h4>
          <span> Yes. Cropshere offers all kind of tools for organization
          and planning for agriculture</span>
        </div>
        <div style="margin-bottom: 10px">
          <h4>3. What information does the web site provide and how does it help in agricultural decisions?</h4>
          <span> With Cropshere, you can set basic information about the resources, like the name,
            amount, purchase price and sale price. You can also compare the information with other resources.
            We believe that with this concise information it will be easier to make a decision about the
            management of any resource.</span>
        </div>
        <div style="margin-bottom: 10px">
          <h4>4. How can I contact technical support?</h4>
          <span> Cropshere clients can easily contact support by calling the number
          <span style="color:blue">999-888-777</span>
          </span>
        </div>

      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card{
  background-color: white;
  padding: 2rem;
  overflow: hidden
}

h4 {
  color: #3C5A64;
  font-weight: bold;
}

@media (max-width: 768px){
  .card {
    width: 20rem;
    margin-left: 0;
    margin-top: 0;
  }
}

</style>