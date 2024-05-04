<script>
import CreatePasswordSuccessDialog from './dialogs/create_password_success.dialog.vue'
export default {
  name: 'create_password',
  data(){
    return{
      password: '',
      confirm_password: '',
      isPasswordValid: true,
      arePasswordsEqual: false,
      visibleSuccessDialog: false,
    }
  },

  components: {
    CreatePasswordSuccessDialog
  },

  methods: {
    validatePassword() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&])[A-Za-z\d@#$%&]{8,}$/;
      if(this.password !== '') this.isPasswordValid = regex.test(this.password);
    },

    confirmPassword() {
      if(this.confirm_password !== '') this.arePasswordsEqual = this.confirm_password === this.password;
    }
  }

}
</script>

<template>
  <pv-card class="card">

    <template #title>
      <h1 style="text-align: center">Create a Password</h1>
    </template>

    <template #content>

      <div style="margin-left: 20px">
        <label for="password">Password</label>
        <pv-input-text aria-label="password_input" class="input_text" id="password" v-model="password" @blur="validatePassword()" :class="{ 'is-invalid': !isPasswordValid }"/>
        <small id="valid_password" style="font-size: 10px" v-if="!isPasswordValid">
          Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and
          be at least 8 characters long
        </small>
      </div>


      <div style="margin-left: 20px">
        <label for="confirm_password">Confirm Password</label>
        <pv-input-text aria-label="confirm_password_input" class="input_text" id="email" v-model="confirm_password"
                       @blur="confirmPassword()" :class="{ 'is-invalid': !arePasswordsEqual  && confirm_password !== '' }" />
        <br>
        <small id="confirm_Password" style="font-size: 10px"
               v-if="!arePasswordsEqual && confirm_password !== ''">The passwords do not match</small>
      </div>

      <br>

      <div style="text-align: center">
        <pv-button class="mini_button" icon="pi pi-angle-left" style="margin-right: 40px" aria-label="Return"
                   @click="$router.go(-1)"></pv-button>
        <pv-button class="large_button" icon="pi pi-sign-in" label="Create Account" severity="primary"
                   @click="visibleSuccessDialog = true" :disabled="!arePasswordsEqual"></pv-button>
        <create-password-success-dialog v-model:visible="visibleSuccessDialog"></create-password-success-dialog>
      </div>

    </template>

  </pv-card>
</template>

<style scoped>
/*CARD*/
.card{
  background-color: #95C8BC;
  width: 30rem;
  margin-left: 50px;
  overflow: hidden;
}

/*LABELS*/
label {
  background-color: transparent;
  font-size: 10px;
}

.input_text{
  font-size: 10px;
  width:400px;
  height: 20px;
}

h5{
  color: black;
  padding: 0;
  transition: color 0.2s;
}

h5:hover{
  color:blue;
}

/*BUTTONS*/
.large_button {
  width: 50%;
  background-color: #3C5A64;
  transition-duration: 0.2s;
}

.large_button:hover {
  background-color: #ffffff;
  color: black;
}

.mini_button{
  transition-duration: 0.2s;
  background-color: #3C5A64;
  margin-left: 20px;
  color: white;
}

.mini_button:hover {
  background-color: white;
  color: black;
}

.is-invalid {
  border-color: red;
}

@media (max-width: 768px){
  .card {
    margin-top: 50px;
    width: 20rem;
    margin-left: 0;
  }

  .input_text{
    font-size: 12px;
    width:240px;
    height: 20px;
  }
}
</style>