<script>
import Home from "@/components/start_screen/autentication/autentication_view.component.vue";
import Register from "@/components/start_screen/autentication/register/register.component.vue";
import Sign_in from "@/components/start_screen/autentication/sign_in/sign_in.component.vue";
import Subscription from "@/components/start_screen/subscription/subscription.component.vue";
import Recover_password from "@/components/start_screen/password/recover_password.component.vue";


export default{
  name: "start_screen",
  components: {Recover_password, Subscription, Sign_in, Register, Home},
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<style>
@media (max-width: 768px) {

  .image{
    display: none;
  }

  .container {
    flex-direction: column;
    height: auto;
  }
}
</style>