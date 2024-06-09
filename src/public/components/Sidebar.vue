<script setup>
import { ref } from 'vue'
import logoURL from '../../assets/logo.svg'

const visible = ref(false);

const closeSidebar = () => {
  visible.value = false;
};
</script>

<template>
  <pv-toolbar class="custom-toolbar">
    <template #start>
      <IconField iconPosition="left">
        <pv-button icon="pi pi-align-justify" @click="visible = true" class="open-button"/>
      </IconField>
      <div class="logo">
        <img :src="logoURL" alt="icon" />
      </div>
    </template>
  </pv-toolbar>

  <div class="card flex justify-content-center custom-sidebar">
    <pv-sidebar v-model:visible="visible" style="background-color: #10B981">
      <template #container="{ closeCallback }" >
        <div class="sidebar-content">
          <div class="sidebar-header">
            <div class="logo">
              <img :src="logoURL" alt="icon" />
            </div>
            <span>
              <pv-button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="close-button">
              </pv-button>
            </span>
          </div>

          <div class="sidebar-navigation">
            <router-link to="/" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">terrain</span>
              <span class="text">Terrains</span>
            </router-link>
            <router-link to="/resources" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">fact_check</span>
              <span class="text">Resource management</span>
            </router-link>
            <router-link to="/machinery" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">engineering</span>
              <span class="text">Machinery</span>
            </router-link>
            <router-link to="/collaboration" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">group</span>
              <span class="text">Groups</span>
            </router-link>
            <router-link to="/documents" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">email</span>
              <span class="text">Documents</span>
            </router-link>
            <router-link to="/support" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">help</span>
              <span class="text">Support and help</span>
            </router-link>
            <router-link to="/settings" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">settings</span>
              <span class="text">Settings</span>
            </router-link>
          </div>

          <div class="other-options">
            <router-link to="/account" class="sidebar-button" @click="closeSidebar">
              <span class="material-icons">account_circle</span>
              <span class="text">Account</span>
            </router-link>
          </div>
        </div>
      </template>
    </pv-sidebar>
  </div>
</template>

<style scoped>
.custom-toolbar{
  background-color: #10B981;
  position: fixed;
  width: 100vw;
  z-index: 1000;
}
.sidebar-header{
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem 0  1.5rem;
  display: flex;
  margin-bottom: 3vh;
}

.sidebar-content{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logo {
  img {
    width: 100%;
    max-width: 15rem;
  }
}

.material-icons {
  font-size: 2rem;
  color: var(--primary-color-text);
  transition: 0.2s ease-in-out;
  margin-right: 1rem;
}

.open-button {
  font-size: 2rem;
  transition: 0.2s ease-in-out;
  color: var(--primary-color-text);
  margin-right: 1rem;
}

.close-button{
  height: 2rem;
  width: 2rem;
  transition: 0.2s ease-in-out;
  background-color: white;
  margin-left: 2rem;
}

.sidebar-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 1rem 1rem;
}

.sidebar-button:hover {
  background-color: var(--primary-600);
}

.text {
  transition: 0.2s ease-in-out;
  min-height: 2rem;
  display: flex;
  color: var(--primary-color-text);
}

.other-options {
  margin-top: auto;
}
</style>
