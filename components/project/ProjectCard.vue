<template>
  <div>
    <div>name:</div>
    <div>{{ project.name }}</div>
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
