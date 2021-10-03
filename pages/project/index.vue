<template>
  <div>
    <h1>Projects</h1>
    <project-wrapper :projects="projects" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    ProjectWrapper: () => import('@/components/project/ProjectWrapper.vue'),
  },
  computed: {
    ...mapGetters(['projects']),
  },
  mounted() {
    this.$store.dispatch('setProjects')
  },
}
</script>
