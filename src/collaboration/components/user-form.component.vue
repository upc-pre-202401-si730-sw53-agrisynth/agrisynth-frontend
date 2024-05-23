<!-- pages/UserForm.vue -->
<template>
  <Dialog :visible="visible" @hide="close" :modal="true" :closable="true">
    <form @submit.prevent="handleSubmit">
      <InputText id="name" v-model="user.name" placeholder="Enter name" />
      <InputText id="username" v-model="user.username" placeholder="Enter username" />
      <Button label="Save" />
    </form>
  </Dialog>
</template>

<script>
import { ref } from 'vue';
import { Member } from '../model/member.entity.js';

export default {
  props: {
    initialData: {
      type: Object,
      default: () => new Member('', '')
    }
  },
  emits: ['save', 'close'],
  setup(props, { emit }) {
    const user = ref(props.initialData);

    function handleSubmit() {
      emit('save', user.value);
    }

    function close() {
      emit('close');
    }

    return { user, handleSubmit, close };
  }
}
</script>
