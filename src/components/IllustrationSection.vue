<template>
  <alternating-section :reversed="reversed" :type="type" :icon="icon" :placeholder-text="placeholderText">
    <template #visual>
      <div class="illustration-section__visual">
        <slot name="illustration">
          <div class="illustration-section__placeholder">
            <v-icon size="x-large" class="illustration-section__icon">{{ icon }}</v-icon>
            <p>{{ placeholderText }}</p>
          </div>
        </slot>
      </div>
    </template>
    
    <div class="illustration-section__content">
      <h3 v-if="title" class="illustration-section__title">{{ title }}</h3>
      <p v-if="subtitle" class="illustration-section__subtitle">{{ subtitle }}</p>
      <div class="illustration-section__body">
        <slot></slot>
      </div>
    </div>
  </alternating-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlternatingSection from './AlternatingSection.vue';

export default defineComponent({
  name: 'IllustrationSection',
  components: {
    AlternatingSection
  },
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
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
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
.illustration-section__visual {
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.illustration-section__placeholder {
  text-align: center;
  padding: 2rem;
  color: var(--color-text-secondary);
}

.illustration-section__icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.illustration-section__title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.illustration-section__subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.illustration-section__body {
  line-height: 1.7;
  color: var(--color-text);
}

.illustration-section__body :deep(p) {
  margin-bottom: 1.25rem;
}

.illustration-section__body :deep(ul) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.illustration-section__body :deep(li) {
  margin-bottom: 0.5rem;
  position: relative;
}

.illustration-section__body :deep(li:before) {
  content: '•';
  color: var(--color-primary);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  position: absolute;
  left: 0;
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .illustration-section__title {
    font-size: 1.75rem;
  }
  
  .illustration-section__subtitle {
    font-size: 1.1rem;
  }
}
</style>
