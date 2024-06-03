<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="icon" />
    </div>

    <div class="menu-toggle-wrap">
      <pv-button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_arrow_right</span>
      </pv-button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">terrain</span>
        <span class="text">Terrains</span>
      </router-link>
      <router-link to="/resources" class="button">
        <span class="material-icons">fact_check</span>
        <span class="text">Resource management</span>
      </router-link>
      <router-link to="/machinarys" class="button">
        <span class="material-icons">engineering</span>
        <span class="text">Machinerys</span>
      </router-link>
      <router-link to="/collaboration" class="button">
        <span class="material-icons">group</span>
        <span class="text">Groups</span>
      </router-link>
      <router-link to="/documents" class="button">
        <span class="material-icons">email</span>
        <span class="text">Documents</span>
      </router-link>
      <router-link to="/support" class="button">
        <span class="material-icons">help</span>
        <span class="text">Suport and help</span>
      </router-link>
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/account" class="button">
        <span class="material-icons">account_circle</span>
        <span class="text">Account</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../../assets/logo.svg'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  color: var(--primary-color-text);
  width: calc(2rem + 32px);
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    img {
      width: 100%;
      max-width: 15rem;
    }
  }

  .menu-toggle-wrap {
    position: relative;

    .menu-toggle {
      position: absolute;
      z-index: 10;
      right: -20%;
      background-color: var(--primary-700);

      .material-icons {
        color: var(--primary-color-text);
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    min-height: 2rem;
    display: flex;
    align-items: center;
  }

  h3 {
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--primary-color-text);
        transition: 0.2s ease-in-out;
      }

      .text {
        transition: 0.2s ease-in-out;
        min-height: 2rem;
        display: flex;
        color: var(--primary-color-text);
      }

      &:hover {
        background-color: var(--primary-600);
      }

      &.router-link-exact-active {
        background-color: var(--primary-600);
        font-weight: bold;
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
