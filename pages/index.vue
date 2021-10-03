<template>
  <div>
    <h1>Projects</h1>
    <project-wrapper :projects="projects" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectWrapper from '@/components/project/ProjectWrapper'

export default {
  name: 'Index',
  components: {
    ProjectWrapper,
  },
  computed: {
    ...mapGetters(['projects']),
  },
  mounted() {
    this.$store.dispatch('setProjects')
  },
}
</script>
