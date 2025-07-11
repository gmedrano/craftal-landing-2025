<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = {
      product: [
        { title: 'Features', to: '#features' },
        { title: 'Pricing', to: '#pricing' },
        { title: 'Use Cases', to: '#use-cases' },
        { title: 'Integrations', to: '#integrations' },
      ],
      company: [
        { title: 'About Us', to: '/about' },
        { title: 'Blog', to: '/blog' },
        { title: 'Careers', to: '/careers' },
        { title: 'Contact', to: '/contact' },
      ],
      legal: [
        { title: 'Privacy Policy', to: '/privacy' },
        { title: 'Terms of Service', to: '/terms' },
        { title: 'Cookie Policy', to: '/cookies' },
      ],
      social: [
        { icon: 'mdi-twitter', to: 'https://twitter.com/craftal' },
        { icon: 'mdi-github', to: 'https://github.com/craftal' },
        { icon: 'mdi-linkedin', to: 'https://linkedin.com/company/craftal' },
      ],
    };

    return {
      currentYear,
      footerLinks,
    };
  },
});
</script>

<template>
  <v-footer class="footer">
    <div class="footer__content">
      <div class="container">
        <div class="footer__main">
          <!-- Logo and Tagline -->
          <div class="footer__brand">
            <img src="/craftal-logo.svg" alt="Craftal Logo" class="footer__logo-img" />
            <p class="footer__tagline">
              From Idea to Ecosystem — Finally.
            </p>
            <div class="footer__social">
              <a
                v-for="(social, index) in footerLinks.social"
                :key="`social-${index}`"
                :href="social.to"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__social-link"
              >
                <v-icon :icon="social.icon" size="24" />
              </a>
            </div>
          </div>

          <!-- Footer Links -->
          <div class="footer__links">
            <div class="footer__links-group">
              <h4 class="footer__links-title">Product</h4>
              <ul class="footer__links-list">
                <li v-for="(link, index) in footerLinks.product" :key="`product-${index}`">
                  <a :href="link.to" class="footer__link">{{ link.title }}</a>
                </li>
              </ul>
            </div>

            <div class="footer__links-group">
              <h4 class="footer__links-title">Company</h4>
              <ul class="footer__links-list">
                <li v-for="(link, index) in footerLinks.company" :key="`company-${index}`">
                  <a :href="link.to" class="footer__link">{{ link.title }}</a>
                </li>
              </ul>
            </div>

            <div class="footer__links-group">
              <h4 class="footer__links-title">Legal</h4>
              <ul class="footer__links-list">
                <li v-for="(link, index) in footerLinks.legal" :key="`legal-${index}`">
                  <a :href="link.to" class="footer__link">{{ link.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="footer__bottom">
          <p class="footer__copyright">
            &copy; {{ currentYear }} Craftal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer__content {
  width: 100%;
}

.footer__main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer__brand {
  max-width: 300px;
}

.footer__logo {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.footer__tagline {
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.footer__social {
  display: flex;
  gap: 1rem;
}

.footer__social-link {
  color: var(--color-secondary);
  transition: color 0.2s ease;
}

.footer__social-link:hover {
  color: var(--color-primary);
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.footer__links-group {
  margin-bottom: 1.5rem;
}

.footer__links-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-secondary);
}

.footer__links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__link {
  display: block;
  padding: 0.5rem 0;
  color: var(--color-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: var(--color-primary);
}

.footer__bottom {
  border-top: 1px solid #e9ecef;
  padding-top: 2rem;
  text-align: center;
}

.footer__copyright {
  color: #6c757d;
  font-size: 0.875rem;
  margin: 0;
}

@media (min-width: 768px) {
  .footer__links {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}

@media (min-width: 960px) {
  .footer__main {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
