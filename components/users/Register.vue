<template>
  <div class="col-row">
    <h1>Register</h1>
    <div class="col-md-6 col-sm-12 email-section">
      <label for="email">Email</label>
      <input v-model="info.email" type="email" name="email" />
    </div>
    <div class="col-md-6 col-sm-12 password-section">
      <label for="password">Password</label>
      <input v-model="info.password" type="password" />
    </div>
    <div class="col-md-6 col-sm-12 password-confirmation-section">
      <label for="password-confirmation">Confirm Password</label>
      <input v-model="info.passwordConfirmation" type="password" />
    </div>
    <div class="col-12">
      <button @click="handleSubmit">SUBMIT</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      info: {
        email: null,
        password: null,
        passwordConfirmation: null,
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('user/setRegistration', this.info)
    },
  },
}
</script>
