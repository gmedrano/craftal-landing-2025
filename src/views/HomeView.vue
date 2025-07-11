<script lang="ts">
import { defineComponent } from 'vue';
import FeatureHighlight from '@/components/FeatureHighlight.vue';
import ProblemSection from '@/components/ProblemSection.vue';
import SolutionSection from '@/components/SolutionSection.vue';
import IllustrationSection from '@/components/IllustrationSection.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FeatureHighlight,
    ProblemSection,
    SolutionSection,
    IllustrationSection
  },
  setup() {
    const features = [
      {
        icon: 'mdi-earth',
        title: 'Build Ecosystems, Not Screens',
        description: 'Model entire product ecosystems with interconnected states and flows, not just static screens.'
      },
      {
        icon: 'mdi-vector-link',
        title: 'Align Business, Product & Code',
        description: 'Keep your business logic, product requirements, and implementation in perfect sync across all teams.'
      },
      {
        icon: 'mdi-robot',
        title: 'Designed for GenAI-Native Workflows',
        description: 'Leverage AI to accelerate your product development with structured, machine-readable product definitions.'
      }
    ];

    return {
      features
    };
  },
});
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="home__section home__section--hero">
      <div class="home__container">
        <div class="home__hero">
          <div class="home__hero-content">
            <h1 class="home__hero-title">From Idea to Ecosystem — Finally.</h1>
            <p class="home__hero-subtitle">
              Craftal is the AI-native workspace for designing and syncing full product ecosystems — not just apps.
            </p>
            <div class="home__hero-cta">
              <v-btn
                color="primary"
                size="x-large"
                class="home__hero-cta-button"
              >
                Request Access
              </v-btn>
              <v-btn
                variant="outlined"
                size="x-large"
                class="home__hero-cta-button"
              >
                Watch Demo
              </v-btn>
            </div>
            <div class="home__hero-badges">
              <v-chip class="home__hero-badge" size="small">
                <v-icon start icon="mdi-check-circle"></v-icon>
                No credit card required
              </v-chip>
              <v-chip class="home__hero-badge" size="small">
                <v-icon start icon="mdi-check-circle"></v-icon>
                Get early access
              </v-chip>
            </div>
          </div>
          <div class="home__hero-visual">
            <div class="home__hero-visual-placeholder">
              <v-icon size="x-large" icon="mdi-monitor-screenshot"></v-icon>
              <p>Product Screenshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <problem-section />

    <!-- The Solution Section -->
    <solution-section />

    <!-- How It Works - Visual Demonstration -->
    <illustration-section 
      title="From Complex Requirements to Clear Implementation"
      subtitle="Craftal's visual canvas makes it easy to model and understand complex business logic"
      icon="mdi-shape-outline"
      placeholder-text="Visualization of Craftal's modeling interface"
    >
      <p>Craftal transforms the way teams collaborate on product development by providing a visual, interactive canvas that bridges the gap between business requirements and technical implementation.</p>
      
      <ul>
        <li>Model complex business rules and workflows visually</li>
        <li>Generate implementation-ready code and documentation</li>
        <li>Keep all stakeholders aligned with a single source of truth</li>
      </ul>
    </illustration-section>

    <!-- Seamless Integration Section -->
    <illustration-section 
      reversed
      type="light"
      title="Seamless Integration with Your Existing Tools"
      subtitle="Connect Craftal with your favorite development and design tools"
      icon="mdi-connection"
      placeholder-text="Integration diagram with popular tools"
    >
      <p>Craftal fits perfectly into your existing workflow, connecting with the tools you already use every day.</p>
      
      <ul>
        <li>Sync with design tools like Figma and Sketch</li>
        <li>Connect to project management tools like Jira and Linear</li>
        <li>Export to code repositories with version control integration</li>
      </ul>
    </illustration-section>

    <!-- AI-Powered Assistance -->
    <illustration-section 
      type="primary"
      title="AI-Powered Development Assistant"
      subtitle="Leverage AI to accelerate your development workflow"
      icon="mdi-robot"
      placeholder-text="AI assistance in action"
    >
      <p>Our AI assistant helps you build faster and with fewer errors by suggesting improvements, generating boilerplate code, and catching potential issues before they become problems.</p>
      
      <ul>
        <li>Automated code generation from visual models</li>
        <li>Intelligent suggestions for optimization</li>
        <li>Real-time collaboration features for distributed teams</li>
      </ul>
    </illustration-section>

    <!-- Social Proof Section -->
    <section class="home__section home__section--light">
      <div class="home__container">
        <div class="home__social-proof">
          <p class="home__social-proof-text">Trusted by product teams at innovative companies</p>
          <div class="home__social-proof-logos">
            <!-- TODO: Replace with actual logos -->
            <div v-for="i in 5" :key="i" class="home__social-proof-logo">
              <div class="home__social-proof-logo-placeholder">
                Company {{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Highlights Section -->
    <section class="home__section">
      <div class="home__container">
        <div class="section-header">
          <h2 class="section-header__title">Powerful Features for Modern Teams</h2>
          <p class="section-header__subtitle">Everything you need to build and maintain a world-class design system</p>
        </div>
        
        <div class="features-grid">
          <FeatureHighlight
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Account for fixed header */
.home {
  padding-top: 80px;
}

.hero {
  padding: 4rem 0;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
}

.hero__container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-header__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-header__subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary);
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Responsive styles */
@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .section-header {
    margin-bottom: 4rem;
  }
  
  .section-header__title {
    font-size: 2.5rem;
  }
}

.home__section--hero {
  padding: calc(var(--section-padding) * 1.5) 0 var(--section-padding);
  position: relative;
  overflow: hidden;
}

.home__section--light {
  background-color: #f8f9fa;
}

.home__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.home__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
}

.home__hero-content {
  flex: 1;
  max-width: 600px;
  margin-bottom: 2rem;
}

.home__hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.home__hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.home__hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.home__hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.home__hero-badge {
  display: inline-flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
  font-weight: 500;
}

.home__hero-badge .v-icon {
  margin-right: 0.5rem;
  color: var(--color-primary);
}

.home__hero-visual {
  flex: 1;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.home__hero-visual-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-secondary);
  background-color: #f8f9fa;
}

.home__hero-visual-placeholder p {
  margin-top: 1rem;
  font-weight: 500;
}

.home__social-proof {
  text-align: center;
  padding: 3rem 0;
}

.home__social-proof-text {
  font-size: 1rem;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.home__social-proof-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.home__social-proof-logos img {
  height: 32px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.home__social-proof-logos img:hover {
  opacity: 1;
}

.home__social-proof-logo-placeholder {
  background-color: #f1f3f5;
  border-radius: 4px;
}

/* Media Queries */
@media (min-width: 600px) {
  .home__hero-title {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .home__hero-badges {
    justify-content: flex-start;
  }
  
  .home__hero-cta {
    justify-content: flex-start;
  }
}

@media (min-width: 960px) {
  .home__hero {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
  
  .home__hero-content {
    margin-bottom: 0;
    padding-right: 2rem;
  }
}

@media (min-width: 1264px) {
  .home__container {
    padding: 0;
  }
}
</style>
