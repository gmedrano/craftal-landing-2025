<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const mobileMenuOpen = ref(false);
    const navItems = [
      { title: 'Features', to: '#features' },
      { title: 'How It Works', to: '#how-it-works' },
      { title: 'Use Cases', to: '#use-cases' },
      { title: 'Reviews', to: '#reviews' },
      { title: 'FAQ', to: '#faq' },
    ];

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    return {
      navItems,
      mobileMenuOpen,
      toggleMobileMenu,
    };
  },
});
</script>

<template>
  <v-app-bar app color="white" elevation="1" height="80">
    <div class="container header">
      <!-- Logo -->
      <router-link to="/" class="header__logo">
        <img src="/craftal-logo.svg" alt="Craftal Logo" class="header__logo-img" />
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-for="(item, index) in navItems" :key="index" class="header__nav-item">
            <a :href="item.to" class="header__nav-link">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon 
        class="header__mobile-menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      ></v-app-bar-nav-icon>

      <!-- CTA Button -->
      <v-btn
        color="primary"
        class="header__cta"
        size="large"
      >
        Join the Early List
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile Menu -->
  <v-navigation-drawer
    v-model="mobileMenuOpen"
    temporary
    location="right"
    class="mobile-menu"
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        :href="item.to"
        @click="mobileMenuOpen = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-btn
          color="primary"
          block
          class="mt-4"
          @click="mobileMenuOpen = false"
        >
          Join the Early List
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
}

.header__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.header__logo-text {
  margin-left: 0.5rem;
}

.header__nav {
  display: none;
}

.header__nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__nav-item {
  margin: 0 0.5rem;
}

.header__nav-link {
  color: var(--color-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.header__nav-link:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.header__mobile-menu {
  display: block;
}

.header__cta {
  display: none;
}

.mobile-menu__header {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

@media (min-width: 960px) {
  .header__nav {
    display: block;
  }
  
  .header__mobile-menu {
    display: none;
  }
  
  .header__cta {
    display: inline-flex;
  }
}
</style>
