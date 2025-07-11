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
  <div class="card">
    <div class="card__icon">
      <v-icon :icon="icon" size="x-large" color="primary" />
    </div>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__text">{{ description }}</p>
  </div>
</template>


