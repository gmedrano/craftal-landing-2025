/**
 * Craftal - Main JavaScript
 * Handles all interactive functionality for the static site
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Management
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.material-icons');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use system preference
  const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Apply the current theme
  applyTheme(currentTheme);
  
  // Toggle theme when button is clicked
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
  
  // Listen for system theme changes
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenuToggle.setAttribute('aria-label', `${isExpanded ? 'Open' : 'Close'} menu`);
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
  }
  
  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        } else {
          location.hash = targetId;
        }
      }
    });
  });
  
  // Back to top button
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      
      // In a real app, you would send this data to a server
      console.log('Form submitted:', formObject);
      
      // Show success message (in a real app, you'd handle the response from the server)
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Initialize AOS (Animate On Scroll) if needed
  // if (typeof AOS !== 'undefined') {
  //   AOS.init({
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     once: true
  //   });
  // }
});

/**
 * Apply the specified theme
 * @param {string} theme - The theme to apply ('light' or 'dark')
 */
function applyTheme(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.material-icons');
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) {
      themeIcon.textContent = 'light_mode';
    }
    // Update logo to light version
    updateLogo('light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) {
      themeIcon.textContent = 'dark_mode';
    }
    // Update logo to dark version
    updateLogo('dark');
  }
}

/**
 * Update the logo based on the current theme
 * @param {string} theme - The current theme ('light' or 'dark')
 */
function updateLogo(theme) {
  const logos = document.querySelectorAll('.logo__img, .footer-logo__img');
  const logoPath = theme === 'dark' ? 'images/craftal-logo-light.svg' : 'images/craftal-logo-dark.svg';
  
  logos.forEach(logo => {
    if (logo instanceof HTMLImageElement) {
      logo.src = logoPath;
    }
  });
}

// Handle page transitions (prevent flash of unstyled content)
document.documentElement.classList.add('js');

// Add a class when the page is fully loaded
window.addEventListener('load', () => {
  document.documentElement.classList.add('loaded');
});
