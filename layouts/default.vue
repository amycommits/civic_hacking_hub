<template>
  <div>
    <nav-bar />
    <nuxt />
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
export default {
  name: 'DefaultTemplate',
  components: {
    NavBar
  }
}
</script>
