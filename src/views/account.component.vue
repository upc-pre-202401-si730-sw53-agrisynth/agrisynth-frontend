<script>
import Home from "@/account/pages/account.component.vue";
import Register from "@/account/pages/register.component.vue";
import Sign_in from "@/account/pages/sign_in.component.vue";
import Subscription from "@/account/pages/subscription.component.vue";
import Recover_password from "@/account/pages/recover_password.component.vue";


export default {
  name: "account",
  components: { Recover_password, Subscription, Sign_in, Register, Home },
}
</script>

<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<style scoped></style>