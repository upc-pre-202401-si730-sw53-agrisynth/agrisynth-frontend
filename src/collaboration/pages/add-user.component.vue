<template>
  <div>
    <button @click="visible = true">Add New User</button>
    <UserForm :visible="visible" @update:visible="visible = $event" @save="handleSave" />
  </div>
</template>

<script>
import UserForm from '../components/user-form.component.vue'; // Verifica que la ruta de importación sea correcta

export default {
  components: {UserForm},
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleSave(user) {
      console.log('User saved', user);
      // Aquí iría la llamada a la API para guardar el usuario
      this.visible = false; // Cierra el diálogo después de guardar
      this.$router.push('/members');
    }
  }
}
</script>
