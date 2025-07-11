<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const formspreeEndpoint = 'https://formspree.io/f/mgvygdvj';

    const formData = ref({
      name: '',
      email: '',
      message: '',
    });

    const statusMessage = ref('');
    const isSubmitting = ref(false);

    const handleSubmit = async (event: Event) => {
      isSubmitting.value = true;
      statusMessage.value = '';
      const form = event.target as HTMLFormElement;
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          statusMessage.value = 'Thanks for your submission!';
          form.reset();
          formData.value = { name: '', email: '', message: '' };
        } else {
          const responseData = await response.json();
          if ('errors' in responseData) {
            statusMessage.value = responseData.errors.map((error: any) => error.message).join(', ');
          } else {
            statusMessage.value = 'Oops! There was a problem submitting your form.';
          }
        }
      } catch (error) {
        statusMessage.value = 'Oops! There was a problem submitting your form.';
      } finally {
        isSubmitting.value = false;
      }
    };

    return {
      formspreeEndpoint,
      formData,
      statusMessage,
      isSubmitting,
      handleSubmit,
    };
  },
});
</script>

<template>
  <form
    :action="formspreeEndpoint"
    method="POST"
    class="contact-form"
    @submit.prevent="handleSubmit"
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
        :disabled="isSubmitting"
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
        :disabled="isSubmitting"
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
        :disabled="isSubmitting"
      ></textarea>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="button button--primary button--large" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Send Message' }}
      </button>
    </div>
    <p v-if="statusMessage" class="form-status">{{ statusMessage }}</p>
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

.form-status {
  text-align: center;
  margin-top: var(--space-md);
  font-weight: 500;
}
</style>
