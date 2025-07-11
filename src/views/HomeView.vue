<script lang="ts">
import { defineComponent } from 'vue';
import FeatureHighlight from '@/components/FeatureHighlight.vue';
import ProblemSection from '@/components/ProblemSection.vue';
import SolutionSection from '@/components/SolutionSection.vue';
import IllustrationSection from '@/components/IllustrationSection.vue';
import QuoteSection from '@/components/QuoteSection.vue';
import ContactForm from '@/components/ContactForm.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FeatureHighlight,
    ProblemSection,
    SolutionSection,
    IllustrationSection,
    QuoteSection,
    ContactForm
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
    <section class="section hero-section">
      <div class="container">
        <div class="hero-section__content">
          <h1 class="hero-section__title">From Idea to Ecosystem — Finally.</h1>
          <p class="hero-section__subtitle">
            Craftal is the AI-native workspace for designing and syncing full product ecosystems — not just apps.
          </p>
          <div class="hero-section__cta">
            <button class="button button--primary button--large">Request Access</button>
            <button class="button button--outline button--large">Watch Demo</button>
          </div>
          <div class="hero-section__badges">
            <v-chip size="small"><v-icon start icon="mdi-check-circle"></v-icon>No credit card required</v-chip>
            <v-chip size="small"><v-icon start icon="mdi-check-circle"></v-icon>Get early access</v-chip>
          </div>
        </div>
        <div class="hero-section__visual">
          <div class="hero-section__visual-placeholder">
            <!-- TODO: Replace with actual product screenshot/visual -->
            <v-icon size="x-large" icon="mdi-monitor-screenshot"></v-icon>
            <p>Product Screenshot</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <problem-section />

    <!-- The Solution Section -->
    <solution-section />

    <!-- Benefits Section -->
    <section class="section section--light benefits-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-header__title">Why Teams Choose Craftal</h2>
          <p class="section-header__subtitle">Discover the benefits of a unified, AI-native product workspace.</p>
        </div>
      </div>

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
    </section>

    <!-- Quote Section -->
    <quote-section />

    <!-- Feature Highlights Section -->
    <section class="section section--light feature-highlights-section">
      <div class="container">
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

    <!-- Contact Section -->
    <section class="section contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-header__title">Get in Touch</h2>
          <p class="section-header__subtitle">Have a question or want to learn more? We'd love to hear from you.</p>
        </div>
        <contact-form />
      </div>
    </section>
  </div>
</template>

