<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SolutionSection',
});
</script>

<template>
  <section class="solution-section">
    <div class="solution-section__container">
      <!-- Main Section Header -->
      <div class="solution-section__header">
        <h2 class="solution-section__title">Craftal: Your Single Source of Truth</h2>
        <p class="solution-section__subtitle">
          By creating a unified business domain model, Craftal eliminates fragmentation and ensures every team builds from the same shared understanding.
        </p>
      </div>

      <!-- Two-Column Layout for Solutions -->
      <div class="solution-section__grid">
        <!-- Solution 1: Unified Domain -->
        <div class="solution-card">
          <div class="solution-card__visual">
            <!-- TODO: Replace with 'Unified Business Domain' illustration -->
            <div class="solution-card__placeholder">Illustration Placeholder</div>
          </div>
          <div class="solution-card__content">
            <h3 class="solution-card__title">A Unified Business Domain</h3>
            <p class="solution-card__description">
              Craftal provides a centralized canvas where all business logic, rules, and user flows are modeled collaboratively. This shared view ensures perfect alignment across Product, Design, and Engineering from day one.
            </p>
          </div>
        </div>

        <!-- Solution 2: Implementation-Ready Outputs -->
        <div class="solution-card">
          <div class="solution-card__visual">
            <!-- TODO: Replace with 'Implementation-Ready Outputs' illustration -->
            <div class="solution-card__placeholder">Illustration Placeholder</div>
          </div>
          <div class="solution-card__content">
            <h3 class="solution-card__title">Implementation-Ready Outputs</h3>
            <p class="solution-card__description">
              Because all teams work from the same core model, the outputs—from design specs to developer tickets—are always in sync. This eliminates ambiguity and rework, enabling teams to build faster and with higher quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solution-section {
  padding: var(--section-padding) 0;
  background-color: #ffffff; /* Changed to white for contrast */
}

.solution-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.solution-section__header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.solution-section__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.solution-section__subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary);
  line-height: 1.6;
}

.solution-section__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.solution-card {
  background: #f8f9fa; /* Light gray background for cards */
  border-radius: 12px;
  border: 1px solid #dee2e6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.solution-card__visual {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  background-color: #e9ecef;
}

.solution-card__placeholder {
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

.solution-card__content {
  padding: 2rem;
}

.solution-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.solution-card__description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-secondary);
}

/* Responsive styles */
@media (max-width: 767px) {
  .solution-section__grid {
    grid-template-columns: 1fr;
  }

  .solution-section__title {
    font-size: 2rem;
  }

  .solution-section__subtitle {
    font-size: 1.15rem;
  }

  .solution-card__title {
    font-size: 1.3rem;
  }

  .solution-card__description {
    font-size: 1rem;
  }
}
</style>
