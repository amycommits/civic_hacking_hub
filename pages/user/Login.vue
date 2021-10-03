<template>
  <div>
    <login v-if="isLoginSelected" />
    <register v-else />
    <button @click="isLogin">
      <span v-if="isLoginSelected">Register</span>
      <span v-else>Login</span>
    </button>
  </div>
</template>
<script>
import Login from '../../components/users/LoginComponent'
import Register from '../../components/users/Register'
export default {
  name: 'UserLogin',
  components: {
    Login,
    Register,
  },
  middleware: 'notAuthenticated',
  data() {
    return {
      isLoginSelected: true,
    }
  },
  methods: {
    isLogin() {
      this.isLoginSelected = !this.isLoginSelected
    },
  },
}
</script>
