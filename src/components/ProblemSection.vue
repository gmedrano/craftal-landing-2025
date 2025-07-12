<script lang="ts">
import { defineComponent } from 'vue';
import businessDomainFragmentation from '@/assets/images/business-domain-fragmentation.png';
import lostInTranslation from '@/assets/images/lost-in-translation.png';

export default defineComponent({
  name: 'ProblemSection',
  setup() {
    return {
      businessDomainFragmentation,
      lostInTranslation,
    };
  },
});
</script>

<template>
  <section class="section section--light problem-section">
    <div class="problem-section__container">
      <!-- Main Section Header -->
      <div class="section-header">
        <h2 class="section-header__title">The High Cost of Disconnected Teams</h2>
        <p class="section-header__subtitle">
          When product, design, and engineering work in silos, the result is a fragmented development process that costs time, money, and morale.
        </p>
      </div>

      <!-- Two-Column Layout for Problems -->
      <div class="problem-section__grid">
        <!-- Problem 1: Fragmentation -->
        <div class="problem-card">
          <div class="problem-card__visual">
            <img :src="businessDomainFragmentation" alt="Business Domain Fragmentation Illustration" class="problem-card__image" />
          </div>
          <div class="problem-card__content">
            <h3 class="problem-card__title">Business Domain Fragmentation</h3>
            <p class="problem-card__description">
              Product, design, and development teams struggle to integrate diverse inputs into a cohesive plan. Roadmaps, user flows, design systems, and tests exist in separate worlds, creating a fragmented view of the product's core requirements.
            </p>
          </div>
        </div>

        <!-- Problem 2: Lost in Translation -->
        <div class="problem-card">
          <div class="problem-card__visual">
            <img :src="lostInTranslation" alt="Lost in Translation Illustration" class="problem-card__image" />
          </div>
          <div class="problem-card__content">
            <h3 class="problem-card__title">The "Lost in Translation" Effect</h3>
            <p class="problem-card__description">
              Critical details are scattered across documents only relevant to each silo. This forces developers into time-consuming verification and designers to rely on subjective validation, leading to error-prone outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-section {
  padding: var(--section-padding) 0;
  background-color: rgb(var(--v-theme-background));
  color: rgb(var(--v-theme-on-background));
}

.problem-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.problem-section__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.problem-card {
  background-color: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  border-radius: 12px;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.problem-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.problem-card__visual {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  background-color: rgba(var(--v-border-color), 0.2);
}

.problem-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.problem-card__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.problem-card__content {
  padding: 2rem;
}

.problem-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
  margin-bottom: 1rem;
}

.problem-card__description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
}

/* Responsive styles */
@media (max-width: 767px) {
  .problem-section__grid {
    grid-template-columns: 1fr;
  }



  .problem-card__title {
    font-size: 1.3rem;
  }

  .problem-card__description {
    font-size: 1rem;
  }
}
</style>
