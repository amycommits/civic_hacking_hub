<template>
  <div class="row project-card">
    <div class="col-12 project-name">{{ project.name }}</div>
    <div class="col-12 project-description">{{ project.description }}</div>
    <div class="col-md-6 col-sm-12 project-coding-org">
      Coding Organization: {{ project.codeOrganization }}
    </div>
    <div class="col-md-6 col-sm-12 project-nonprofit">
      Benefiting Nonprofit: {{ project.nonprofitOrganization }}
    </div>
    <a :href="project.githubLink" class="col-md-6 col-sm-12 project-name">
      github
    </a>
    <a :href="project.setupLink" class="col-md-6 col-sm-12 project-name">
      setup instructions
    </a>
    <div
      v-for="(term, i) in project.techStack"
      :key="`term-${i}`"
      class="col-2 tech-stack"
    >
      {{ term }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style scoped>
.project-card {
  border: 2px solid black;
}
.project-name {
  font-weight: 900;
}
</style>
