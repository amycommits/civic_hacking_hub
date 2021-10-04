<template>
  <div>
    <button
      class="
        bg-tertiary-dark
        text-white text-7xl
        mx-auto
        ml-5
        text-center
        w-1/2
        rounded-2xl
      "
      @click="setNonprofits"
    >
      Get Results
    </button>
    <pre v-if="nonprofits">
        {{ nonprofits }}
    </pre>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GithubResults',
  computed: {
    ...mapGetters(['nonprofits']),
  },
  methods: {
    setNonprofits() {
      this.$store.dispatch('setNonprofitRepos')
    },
  },
}
</script>
