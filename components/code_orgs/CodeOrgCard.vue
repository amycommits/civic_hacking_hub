<template>
  <div class="row">
    <div class="col-12">
      {{ codeOrg.name }}
      <a v-if="codeOrg.url" :href="codeOrg.url">{{ codeOrg.url }}</a>
    </div>
    <div class="col-12">
      {{ codeOrg.description }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'CodeOrgCard',
  props: {
    codeOrg: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
