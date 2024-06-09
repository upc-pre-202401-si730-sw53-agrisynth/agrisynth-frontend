<script>
import ConfigurationSuccess from '@/configuration/components/configuration_success.dialog.vue'
export default{
  name: 'configuration',
  data(){
    return{
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      identification_document: '',
      user_name: '',
      password: '',
      confirm_password: '',
      isPasswordValid: true,
      arePasswordsEqual: false,
      visibleRegisterSuccessDialog: false,
    }
  },

  components:{
    ConfigurationSuccess,
  },

  methods:{
    validateFirstName(){
      return this.first_name === "invalid";
    },

    validateLastName(){
      return this.last_name === "invalid";
    },

    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(this.email) || this.email === "";
    },

    validateUsername(){
      return this.user_name === "invalid";
    },

    validatePhoneNumber(){
      return /^9\d{2}-\d{3}-\d{3}$/.test(this.phone_number) || this.phone_number === "";
    },

    validateIDNumber(){
      return /^\d{3}-\d{3}-\d{2}$/.test(this.identification_document) || this.identification_document === "";
    },

    validatePassword() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&])[A-Za-z\d@#$%&]{8,}$/;
      if(this.password !== '') this.isPasswordValid = regex.test(this.password);
    },

    confirmPassword() {
      if(this.confirm_password !== '') this.arePasswordsEqual = this.confirm_password === this.password;
    },

    correctPasswords(){
      return (this.isPasswordValid && this.arePasswordsEqual);
    },

    enableContinueButton(){
      if(this.first_name === '' || this.last_name === '' || this.email === ''
          || this.phone_number === '' || this.identification_document === '' || this.user_name === '' ||
          this.password === '' || this.confirm_password === '') return false;
      return !(this.validateFirstName() && this.validateLastName() && this.validateEmail()
          && this.validateUsername() && this.validatePhoneNumber() && this.validateIDNumber()
          && this.correctPasswords());

    }
  }

}
</script>

<template>
  <div class="main-content">
    <pv-card class="card">

      <template #title>
        <h1 class="title">Configuration</h1>
      </template>

      <template #content >
        <div class="twoBlock" style="margin-left: 20px">
          <div>
            <label for="first_name">First Name</label>
            <pv-input-text aria-label="first_name_input" class="text2" id="first_name" v-model="first_name"/>
            <br>
            <small id="valid_first_name" style="font-size: 10px" v-if="validateFirstName()">
              Invalid Name
            </small>
          </div>
          <div style="margin-right: 5px;">
            <label for="last_name" >Last Name</label>
            <pv-input-text aria-label="last_name_input" class="text2" id="last_name" v-model="last_name"/>
            <br>
            <small id="valid_last_name" style="font-size: 10px" v-if="validateLastName()">
              Invalid Name
            </small>
          </div>
        </div>

        <br>

        <div style="margin-left: 20px">
          <label for="email">Email Address</label>
          <br>
          <pv-input-text aria-label="email_input" class="text1" id="email" v-model="email"/>
          <br>
          <small id="valid_last_name" style="font-size: 10px" v-if="!validateEmail()">
            Invalid email
          </small>
        </div>

        <br>

        <div class="twoBlock" style="margin-left: 20px">
          <div>
            <label for="phone_number">Phone Number</label>
            <pv-input-mask aria-label="phone_input" class="text2" id="phone_number" v-model="phone_number"
                           mask="999-999-999" placeholder="999-999-999"/>
            <br>
            <small id="valid_phone_number" style="font-size: 10px" v-if="!validatePhoneNumber()">
              Invalid phone number
            </small>
          </div>
          <div style="margin-left: 20px">
            <label for="ID">Identification Document</label>
            <pv-input-mask aria-label="ID_input" class="text2" id="ID" v-model="identification_document"
                           mask="999-999-99" placeholder="888-777-66" />
            <br>
            <small id="valid_IDNumber" style="font-size: 10px" v-if="!validateIDNumber()">
              Invalid identification document;
            </small>
          </div>

        </div>

        <br><br>

        <div style="margin-left: 20px">
          <label for="user_name">User Name</label>
          <br>
          <pv-input-text aria-label="username_input" class="text1" id="user_name" v-model="user_name"/>
          <small id="valid_last_name" style="font-size: 10px" v-if="validateUsername()">
            Invalid Name
          </small>
        </div>

        <div style="margin-left: 20px">
          <label for="password">Password</label>
          <br>
          <pv-input-text aria-label="password_input" class="text1" id="password" v-model="password" @blur="validatePassword()" :class="{ 'is-invalid': !isPasswordValid }"/>
          <small id="valid_password" style="font-size: 10px" v-if="!isPasswordValid">
            Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and
            be at least 8 characters long
          </small>
        </div>


        <div style="margin-left: 20px">
          <label for="confirm_password">Confirm Password</label>
          <pv-input-text aria-label="confirm_password_input" class="text1" id="email" v-model="confirm_password"
                         @blur="confirmPassword()" :class="{ 'is-invalid': !arePasswordsEqual  && confirm_password !== '' }" />
          <br>
          <small id="confirm_Password" style="font-size: 10px"
                 v-if="!arePasswordsEqual && confirm_password !== ''">The passwords do not match</small>
        </div>

        <br><br>

        <div style="text-align: center">
          <pv-button class="mini_button" icon="pi pi-angle-left" style="margin-right: 40px" aria-label="Return"
                     @click="$router.go(-1)"></pv-button>
          <pv-button class="large_button" icon="pi pi-user-plus" label="Save" severity="primary"
                     @click="visibleRegisterSuccessDialog = true" :disabled="!enableContinueButton()"></pv-button>
          <configuration-success v-model:visible="visibleRegisterSuccessDialog"></configuration-success>
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

.title{
  text-align: center;
  color: #4CAF50;
}

/*CARD*/
.card{
  width: 30rem;
  overflow: hidden;
  margin-top: 15vh;
  background-color: #fcfcfc;
}

/*LABELS*/
label {
  background-color: transparent;
  font-size: 10px;
}

.text2{
  font-size: 15px;
  width: 190px;
  height:20px;
}

.text1{
  font-size: 15px;
  width:400px;
  height: 20px;
}

.twoBlock{
  display: inline-flex;
  justify-content: center;
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

@media (max-width: 768px){
  .card {
    width: 20rem;
  }

  .text2{
    font-size: 12px;
    width: 110px;
    height:20px;
  }

  .text1{
    font-size: 12px;
    width:240px;
    height: 20px;
  }
}
</style>