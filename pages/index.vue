<template>
  <div>
    <h1>
      Projects
    </h1>
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProjectCard from '~/components/project/ProjectCard'
export default {
  name: 'Index',
  components: {
    ProjectCard
  },
  computed: mapState({
    projects: (state) => state.projects
  }),
  mounted() {
    this.$store.dispatch('setProjects')
  }
}
</script>
