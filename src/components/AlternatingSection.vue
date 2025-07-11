<template>
  <section :class="['alternating-section', { 'alternating-section--reversed': reversed }, `alternating-section--${type}`]">
    <div class="alternating-section__container">
      <div class="alternating-section__visual">
        <slot name="visual">
          <!-- Default visual placeholder if none provided -->
          <div class="alternating-section__placeholder">
            <v-icon size="x-large" class="alternating-section__icon">{{ icon }}</v-icon>
            <p>{{ placeholderText }}</p>
          </div>
        </slot>
      </div>
      <div class="alternating-section__content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlternatingSection',
  props: {
    reversed: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => ['default', 'primary', 'secondary', 'light'].includes(value)
    },
    icon: {
      type: String,
      default: 'mdi-image'
    },
    placeholderText: {
      type: String,
      default: 'Illustration Placeholder'
    }
  }
});
</script>

<style scoped>
.alternating-section {
  padding: var(--section-padding) 0;
  position: relative;
}

.alternating-section--primary {
  background-color: var(--color-primary-light);
  color: var(--color-on-primary);
}

.alternating-section--secondary {
  background-color: var(--color-secondary-light);
  color: var(--color-on-secondary);
}

.alternating-section--light {
  background-color: var(--color-background-light);
}

.alternating-section__container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--content-padding);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.alternating-section__visual {
  flex: 1;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background-color: var(--color-background);
  box-shadow: var(--shadow-md);
}

.alternating-section__placeholder {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-secondary);
}

.alternating-section__icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.alternating-section__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Responsive styles */
@media (min-width: 992px) {
  .alternating-section__container {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }

  .alternating-section--reversed .alternating-section__container {
    flex-direction: row-reverse;
  }

  .alternating-section__visual,
  .alternating-section__content {
    flex: 1;
  }
}
</style>
