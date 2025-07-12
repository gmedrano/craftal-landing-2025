<template>
  <alternating-section :reversed="reversed" :type="type">
    <template #visual>
      <div class="illustration-section__visual">
        <slot name="illustration">
          <img v-if="imgSrc" :src="imgSrc" :alt="altText" class="illustration-section__image" />
          <div v-else class="illustration-section__placeholder">
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
    },
    imgSrc: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    }
  }
});
</script>

<style scoped>
.illustration-section__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.illustration-section__visual {
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(var(--v-border-color), 0.1);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.illustration-section__placeholder {
  text-align: center;
  padding: 2rem;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.7;
}

.illustration-section__icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: rgb(var(--v-theme-primary));
}

.illustration-section__title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 1rem;
  line-height: 1.2;
}

.illustration-section__subtitle {
  font-size: 1.25rem;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.7;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.illustration-section__body {
  line-height: 1.7;
  color: rgb(var(--v-theme-on-surface));
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
  color: rgb(var(--v-theme-primary));
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
