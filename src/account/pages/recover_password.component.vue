<script>
import ApiUsers from '@/account/services/api_users.js'
import EmailSentDialog from '../components/email_sent.dialog.vue'
import EmailSentFailureDialog from '../components/email_sent_failure.dialog.vue'
export default{
  name: 'recover_password',
  data(){
    return{
      email: '',
      isSuccessDialogVisible: false,
      isFailureDialogVisible: false,
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
      if (user) this.isSuccessDialogVisible = true;
      else this.isFailureDialogVisible = true;
      console.log(user);
    },

    emailIsEmpty(){
      return this.email === '';
    },
  }

}
</script>

<template>
  <div class="main-content">
    <pv-card class="card">

      <template #title>
        <h1 class="title">Recover Password</h1>
      </template>

      <template #content>

        <div style="text-align: center; margin-bottom: 20px;">
          <h5>Enter your email to send you a code so you can recover your password</h5>
        </div>

        <div>
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
            <email-sent-dialog v-model:visible="isSuccessDialogVisible"></email-sent-dialog>
            <email-sent-failure-dialog v-model:visible="isFailureDialogVisible"></email-sent-failure-dialog>
          </div>
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
  margin-top: 25vh;
  background-color: #fcfcfc;
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


/*BUTTONS*/
.large_button {
  width: 50%;
  height: 50px;
  background-color: #4CAF50;
  transition-duration: 0.2s;
}

.mini_button{
  transition-duration: 0.2s;
  background-color: #4CAF50;
  margin-left: 20px;
  height: 50px;
  color: white;
}

@media (max-width: 768px){
  .card {
    width: 20rem;
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