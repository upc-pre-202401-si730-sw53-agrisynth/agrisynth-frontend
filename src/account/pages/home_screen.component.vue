<script>
import Home from "@/account/pages/autentication_view.component.vue";
import Register from "@/account/pages/register.component.vue";
import Sign_in from "@/account/pages/sign_in.component.vue";
import Subscription from "@/account/pages/subscription.component.vue";
import Recover_password from "@/account/pages/recover_password.component.vue";


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