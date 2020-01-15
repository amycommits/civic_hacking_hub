<template>
  <div>
    <h1>inside project Id</h1>
    <project-card v-if="project" :project="project" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ProjectCard from '../../components/project/ProjectCard'
export default {
  name: 'ProjectId',
  components: {
    ProjectCard
  },
  computed: mapState({
    project: (state) => state.project
  }),
  mounted() {
    this.$store.dispatch('findProject', this.$route.params.id)
  }
}
</script>
