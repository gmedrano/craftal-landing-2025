<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProblemSection',
  setup() {
    return {
      // Component logic here
    };
  },
});
</script>

<template>
  <section class="section section--light problem-section">
    <div class="problem-section__container">
      <!-- Main Section Header -->
      <div class="problem-section__header">
        <h2 class="problem-section__title">The High Cost of Disconnected Teams</h2>
        <p class="problem-section__subtitle">
          Collaboration is plagued by asynchronous processes in functional silos, scattering business domain knowledge and leading to inefficiencies, delays, and suboptimal products.
        </p>
      </div>

      <!-- Two-Column Layout for Problems -->
      <div class="problem-section__grid">
        <!-- Problem 1: Fragmentation -->
        <div class="problem-card">
          <div class="problem-card__visual">
            <!-- TODO: Replace with 'Business Domain Fragmentation' illustration -->
            <div class="problem-card__placeholder">Illustration Placeholder</div>
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
            <!-- TODO: Replace with 'Lost in Translation' illustration -->
            <div class="problem-card__placeholder">Illustration Placeholder</div>
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
  background-color: #f8f9fa;
}

.problem-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.problem-section__header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.problem-section__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.problem-section__subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary);
  line-height: 1.6;
}

.problem-section__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.problem-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.problem-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.problem-card__visual {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  background-color: #e9ecef;
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
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.problem-card__description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-secondary);
}

/* Responsive styles */
@media (max-width: 767px) {
  .problem-section__grid {
    grid-template-columns: 1fr;
  }

  .problem-section__title {
    font-size: 2rem;
  }

  .problem-section__subtitle {
    font-size: 1.15rem;
  }

  .problem-card__title {
    font-size: 1.3rem;
  }

  .problem-card__description {
    font-size: 1rem;
  }
}
</style>
