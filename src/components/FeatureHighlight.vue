<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FeatureHighlight',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      // Component logic here
    };
  },
});
</script>

<template>
  <div class="feature-highlight">
    <div class="feature-highlight__icon">
      <v-icon :icon="icon" size="x-large" color="primary" />
    </div>
    <h3 class="feature-highlight__title">{{ title }}</h3>
    <p class="feature-highlight__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.feature-highlight {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.feature-highlight:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-highlight__icon {
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.feature-highlight__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.feature-highlight__description {
  color: var(--color-secondary);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 599px) {
  .feature-highlight {
    margin-bottom: 1.5rem;
  }
}
</style>
