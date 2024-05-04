<script>
import SignInSuccessDialog from './dialogs/sign_in_success.dialog.vue'
import SignInFailureDialog from './dialogs/sign_in_failure.dialog.vue'
import ApiUsers from '@/collaboration/services/api_users.js'
export default{
  name: 'sign_in',
  data() {
    return {
      email: '',
      password: '',
      visibleSignInSuccessDialog: false,
      visibleSignInFailureDialog: false,
    };
  },

  components:{
    SignInSuccessDialog,
    SignInFailureDialog
  },

  methods:{
    componentsAreEmpty(){
      return this.email === '' || this.password === '';
    },
    async signInUser() {
      if (this.componentsAreEmpty()) return;

      const user = await ApiUsers.getUserByEmail(this.email);
      if (user && user.password === this.password) {
        this.visibleSignInSuccessDialog = true;
      } else this.visibleSignInFailureDialog = true;
    },
  }
}

</script>

<template>
  <pv-card class="card">

    <template #title>
      <h1 style="text-align: center; align-content: center; margin-top: 10px;">Sign In</h1>
    </template>

    <template #content>

      <div style="margin-left: 20px">
        <label for="email" class="mini_text">Email Address</label>
        <br>
        <pv-input-text class="input_text" id="email" v-model="email" aria-label="email-input"/>
      </div>

      <div style="margin-left: 20px">
        <label for="password">Password</label>
        <br>
        <pv-input-text class="input_text" id="password" v-model="password" aria-label="password-input"/>
      </div>

      <br>

      <div style="text-align: center">
        <h5 @click="$router.push('recover-password')">Forgot Password</h5>
      </div>

      <div style="text-align: center">
        <h5 @click="$router.push('register')">Don't have a account? Create a new account</h5>
      </div>

      <br>

      <div style="text-align: center">
        <pv-button class="mini_button" icon="pi pi-angle-left" style="margin-right: 40px" aria-label="Return"
                   @click="$router.go(-1)"></pv-button>
        <pv-button class="large_button" icon="pi pi-sign-in" label="Log in" severity="primary"
                   @click="signInUser()" :disabled="componentsAreEmpty()"></pv-button>
        <sign-in-success-dialog v-model:visible="visibleSignInSuccessDialog"></sign-in-success-dialog>
        <sign-in-failure-dialog v-model:visible="visibleSignInFailureDialog"></sign-in-failure-dialog>
      </div>

    </template>

  </pv-card>
</template>

<style scoped>

/*CARD*/
.card{
  width: 30rem;
  height: 300px;
  margin-top: 30vh;
  margin-left: 25vw;
  overflow: hidden;
  background-color: #95C8BC;
}

/*LABELS*/
label {
  background-color: transparent;
  font-size: 10px;
}

.input_text{
  font-size: 15px;
  width:400px;
  height: 30px;
  align-content: center;
  margin-left: 20px;
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
  height: 50px;
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
  height: 50px;
  color: white;
}

.mini_button:hover {
  background-color: white;
  color: black;
}
/*Responsive*/
@media (max-width: 768px){
  .card {
    width: 20rem;
    height: 22rem;
    margin-left: 66px;
    margin-top: 170px;
  }

  .input_text{
    width: 280px;
    height: 25px;
    margin-bottom: 20px;
    margin-left: 0;
  }
}
</style>