<template>
  <div v-if="user">
    <h1>User Details</h1>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <button @click="backToList">Back to List</button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import userApi from '../services/user-api.service.js';

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const id = this.$route.params.id;
      userApi.fetchUser(id).then(response => {
        this.user = response.data;
      });
    },
    backToList() {
      this.$router.push('/members');
    }
  }
}
</script>
