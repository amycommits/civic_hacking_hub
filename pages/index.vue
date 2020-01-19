<template>
  <div>
    <h1>
      Projects
    </h1>
    <project-wrapper :projects="projects" />
  </div>
</template>

<script>
import ProjectWrapper from '~/components/project/ProjectWrapper'
import InternalService from '~/api/InternalService'

export default {
  name: 'Index',
  components: {
    ProjectWrapper
  },
  data() {
    return {
      projects: []
    }
  },
  asyncData(context) {
    return InternalService.projects().then((result) => {
      return { projects: result.data.projects }
    })
  }
}
</script>
