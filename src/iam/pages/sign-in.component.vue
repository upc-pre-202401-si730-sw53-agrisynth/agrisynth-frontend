<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignInRequest} from "../model/sign-in.request.js";

export default {
  name: "sign-in",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
    }
  }
}
</script>

<template>
  <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="flex flex-column align-items-center justify-content-center">
      <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">

        <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
          <form @submit.prevent="onSignIn">
            <div class="text-center mb-5">
              <div class="text-900 text-3xl font-medium mb-3">Sign In</div>
              <p>Please enter the required fields in order to sign in.</p>
            </div>

            <div>
              <div style="display: flex; flex-direction: column; margin-bottom: 30px">
                <label for="user_name" class="block text-900 text-xl font-medium mb-2">User Name</label>
                <pv-input-text id="username" type="text" placeholder="User name" class="w-full md:w-30rem mb-1"
                               :class="{'p-invalid': !username}" style="padding: 1rem" v-model="username" />
                <small v-if="!username" class="p-invalid">Username is required</small>
              </div>

              <div style="display: flex; flex-direction: column; margin-bottom: 30px">
                <label for="password" class="block text-900 text-xl font-medium mb-2">Password</label>
                <pv-input-text id="password1" type="password" v-model="password" placeholder="Password"
                               class="w-full md:w-30rem mb-1" style="padding: 1rem"
                               :class="{'p-invalid': !password}"></pv-input-text>
                <small v-if="!password" class="p-invalid">Password is required</small>
              </div>
              <pv-button type="submit" label="Sign In" class="w-full p-3 text-xl"></pv-button>
            </div>
          </form>
          <div style="text-align: center">
            <h5 @click="$router.push('/sign-up')">Don't have a account? Create a new account</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>