<script lang="ts">
import { defineComponent, reactive } from 'vue';
import AppHeader from './layouts/AppHeader.vue';
import AppFooter from './layouts/AppFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const snackbar = reactive({
      visible: false,
      message: '',
      color: 'primary',
      timeout: 5000,
    });

    // Expose showSnackbar method to child components
    const showSnackbar = (message: string, color = 'primary') => {
      snackbar.message = message;
      snackbar.color = color;
      snackbar.visible = true;
    };

    return {
      snackbar,
      showSnackbar,
    };
  },
});
</script>

<template>
  <v-app>
    <!-- Header -->
    <app-header />
    
    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    
    <!-- Footer -->
    <app-footer />
    
    <!-- Global Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-app>
</template>

<style>
@import './assets/styles.css';

.logo {
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
