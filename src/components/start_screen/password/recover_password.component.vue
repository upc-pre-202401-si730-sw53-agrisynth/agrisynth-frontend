<script>
import ApiUsers from '@/collaboration/services/api_users.js'
import EmailSentDialog from './dialogs/email_sent.dialog.vue'
import EmailSentFailureDialog from './dialogs/email_sent_failure.dialog.vue'
export default{
  name: 'recover_password',
  data(){
    return{
      email: '',
      visibleSuccessDialog: false,
      visibleFailureDialog: false,
    }
  },

  components:{
    EmailSentDialog,
    EmailSentFailureDialog
  },

  methods:{
    async signInUser() {
      if (this.emailIsEmpty()) return;

      const user = await ApiUsers.getUserByEmail(this.email);
      if (user) this.visibleSuccessDialog = true;
      else this.visibleFailureDialog = true;
      console.log(user);
    },

    emailIsEmpty(){
      return this.email === '';
    },
  }

}
</script>

<template>
  <pv-card class="card">

    <template #title>
      <h1 style="text-align: center; margin-bottom: 20px; margin-top: 20px">Recover Password</h1>
    </template>

    <template #content>

      <div style="text-align: center; margin-bottom: 20px;">
        <h5>Enter your email to send you a code so you can recover your password</h5>
      </div>

      <div style="margin-left: 20px; margin-bottom: 20px;">
        <label for="email">Email Address</label>
        <pv-input-text class="input_text" id="email" v-model="email"/>
      </div>

      <br>

      <div style="text-align: center">
        <div>
          <pv-button class="mini_button" icon="pi pi-angle-left" style="margin-right: 40px" aria-label="Return"
                     @click="$router.go(-1)"></pv-button>
          <pv-button class="large_button" label="Send Email"
                     icon="pi pi-send" severity="primary" @click="signInUser()" :disabled="emailIsEmpty()"/>
          <email-sent-dialog v-model:visible="visibleSuccessDialog"></email-sent-dialog>
          <email-sent-failure-dialog v-model:visible="visibleFailureDialog"></email-sent-failure-dialog>
        </div>
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
  margin-bottom: 30px;
}

.input_text{
  font-size: 15px;
  width:400px;
  height: 30px;
  align-content: center;
  margin-left: 20px;
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

@media (max-width: 768px){
  .card {
    margin-top: 150px;
    width: 20rem;
    margin-left: 0;
  }
  h1{
    font-size: 28px;
  }

  .input_text{
    font-size: 12px;
    width:240px;
    height: 20px;
  }

}

</style>