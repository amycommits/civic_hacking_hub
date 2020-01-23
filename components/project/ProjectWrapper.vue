<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>
<script>
import ProjectCard from '~/components/project/ProjectCard'

export default {
  name: 'Index',
  components: {
    ProjectCard
  },
  props: {
    projects: {
      type: Array,
      default: null
    }
  }
}
</script>
