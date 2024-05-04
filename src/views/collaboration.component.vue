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

<style >
h1 {
  color: #4CAF50; /* Color del título similar al de la imagen */
}

/* Estilos para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Espacio antes de la tabla */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Sombra ligera para la tabla */
  border-radius: 8px; /* Bordes redondeados */
  overflow: hidden; /* Esconde el desbordamiento para mantener los bordes redondeados */
}

th, td {
  border: 1px solid #ddd;
  padding: 12px 15px; /* Ajuste de padding para mayor espacio */
  text-align: left;
}

th {
  background-color: #f4f4f4;
  color: #333; /* Color oscuro para el texto del encabezado */
}

/* Botones y acciones */
button {
  border: none;
  outline: none;
  padding: 8px 12px;
  margin-right: 8px; /* Espacio entre botones */
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
}

button:hover {
  opacity: 0.9; /* Efecto al pasar el ratón por encima */
}

/* Colores específicos para cada acción */
.add-btn {
  background-color: #4CAF50; /* Verde */
  color: white;
}

.edit-btn {
  background-color: #FFC107; /* Amarillo */
  color: black;
}

.delete-btn {
  background-color: #F44336; /* Rojo */
  color: white;
}

.view-btn {
  background-color: #2196F3; /* Azul */
  color: white;
}

.no-users {
  text-align: center;
  color: #888; /* Color gris para el texto cuando no hay usuarios */
}
</style>

