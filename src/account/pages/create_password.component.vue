<script>
import CreatePasswordSuccessDialog from '../components/create_password_success.dialog.vue'
export default {
  name: 'create_password',
  data(){
    return{
      password: '',
      confirm_password: '',
      isPasswordValid: true,
      arePasswordsEqual: false,
      isSuccessDialogVisible: false,
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
  <div class="main-content">
    <pv-card class="card">
      <template #title>
        <h1 class="title">Create a Password</h1>
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

        <div class="button-container">
          <pv-button class="mini_button" icon="pi pi-angle-left" style="margin-right: 40px" aria-label="Return"
                     @click="$router.go(-1)"></pv-button>
          <pv-button class="large_button" icon="pi pi-sign-in" label="Create Account" severity="primary"
                     @click="isSuccessDialogVisible = true" :disabled="!arePasswordsEqual"></pv-button>
          <create-password-success-dialog v-model:visible="isSuccessDialogVisible"></create-password-success-dialog>
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

/*CARD*/
.card{
  width: 30rem;
  overflow: hidden;
  margin-top: 25vh;
  background-color: #fcfcfc;
}

.title{
  text-align: center;
  color: #4CAF50;
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

/*BUTTONS*/
.large_button {
  width: 50%;
  background-color: #4bae4f;
  transition-duration: 0.2s;
}

.mini_button{
  transition-duration: 0.2s;
  background-color: #4bae4f;
  margin-left: 20px;
  color: white;
}
.button-container{
  text-align: center;
}

.is-invalid {
  border-color: red;
}

@media (max-width: 768px){
  .card {
    width: 20rem;
  }

  .input_text{
    font-size: 12px;
    width:240px;
    height: 20px;
  }

  .button-container{
    text-align: center;
    display:inline-flex;
  }
}
</style>