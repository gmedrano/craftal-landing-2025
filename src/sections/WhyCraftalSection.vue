<template>
  <section class="section why-craftal-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">Why Craftal?</h2>
        <p class="section-header__subtitle">Go from idea to a full-fledged product ecosystem, not just an app.</p>
      </div>
      <div class="why-craftal-section__grid">
        <!-- Pillar 1 -->
        <div class="card feature-card">
          <div class="feature-card__icon">
            <!-- TODO: Replace with actual icon -->
            <v-icon>mdi-sitemap</v-icon>
          </div>
          <h3 class="feature-card__title">Go Beyond Screens. Model Systems.</h3>
          <p class="feature-card__description">Craftal’s AI-native DSL lets you define your entire product ecosystem — from user flows and API contracts to business logic and permissions — in a single, human-readable format.</p>
        </div>

        <!-- Pillar 2 -->
        <div class="card feature-card">
          <div class="feature-card__icon">
            <!-- TODO: Replace with actual icon -->
            <v-icon>mdi-sync-circle</v-icon>
          </div>
          <h3 class="feature-card__title">A True Single Source of Truth.</h3>
          <p class="feature-card__description">Your Craftal spec is a living document that stays in sync with Figma, Jira, and your codebase. No more stale docs or conflicting requirements.</p>
        </div>

        <!-- Pillar 3 -->
        <div class="card feature-card">
          <div class="feature-card__icon">
            <!-- TODO: Replace with actual icon -->
            <v-icon>mdi-rocket-launch</v-icon>
          </div>
          <h3 class="feature-card__title">Ship Faster. Build Smarter.</h3>
          <p class="feature-card__description">From your spec, Craftal generates documentation, diagrams, and even prototype-ready code, freeing your team to focus on what matters most: the user.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhyCraftalSection',
});
</script>

<style scoped>
/* Scoped styles will be added if necessary, but we prefer global styles in main.css */
.why-craftal-section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}

.why-craftal-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}
</style>
