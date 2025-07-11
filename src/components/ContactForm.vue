<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactForm',
  setup() {
    // TODO: Replace with your actual Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

    const formData = ref({
      name: '',
      email: '',
      message: '',
    });

    return {
      formspreeEndpoint,
      formData,
    };
  },
});
</script>

<template>
  <form
    :action="formspreeEndpoint"
    method="POST"
    class="contact-form"
  >
    <div class="form-group">
      <label for="name" class="form-label">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-control"
        v-model="formData.name"
        required
      />
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        class="form-control"
        v-model="formData.email"
        required
      />
    </div>
    <div class="form-group">
      <label for="message" class="form-label">Message</label>
      <textarea
        id="message"
        name="message"
        class="form-control"
        rows="5"
        v-model="formData.message"
        required
      ></textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="button button--primary button--large">Send Message</button>
    </div>
  </form>
</template>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-control {
  background-color: #fff;
}
</style>
