<template>
  <div>
    <UserForm :initialData="user" @save="handleSave" @close="handleClose" />
  </div>
</template>

<script>
import UserForm from '../components/user-form.component.vue';
import userApi from '../services/user-api.service';

export default {
  components: {
    UserForm
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      const id = this.$route.params.id;
      userApi.fetchUser(id).then(response => {
        this.user = response.data;
      });
    },
    handleSave(updatedUser) {
      userApi.updateUser(this.user.id, updatedUser).then(() => {
        this.$router.push('/members');
      });
    },
    handleClose() {
      this.$router.push('/members');
    }
  }
}
</script>
