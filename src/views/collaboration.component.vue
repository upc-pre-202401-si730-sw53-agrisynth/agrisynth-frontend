<template>
  <div>
    <h1>Members</h1>
    <button @click="addUser">Add New Member</button>
    <table v-if="users.length > 0">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>
          <button @click="editUser(user.id)">Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
          <button @click="viewDetails(user.id)">View</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <p>No users found.</p>
    </div>
  </div>
</template>

<script>
import userApi from '../collaboration/services/user-api.service.js';

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      userApi.fetchUsers().then(response => {
        this.users = response.data;
      });
    },
    addUser() {
      this.$router.push('/member/add');
    },
    editUser(id) {
      this.$router.push(`/member/edit/${id}`);
    },
    deleteUser(id) {
      if (confirm('Are you sure you want to delete this user?')) {
        userApi.deleteUser(id).then(() => {
          this.users = this.users.filter(user => user.id !== id);
        });
      }
    },
    viewDetails(id) {
      this.$router.push(`/member/${id}`);
    }
  }
}
</script>

<style>
/* Estilos básicos */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f4f4f4;
}
</style>
