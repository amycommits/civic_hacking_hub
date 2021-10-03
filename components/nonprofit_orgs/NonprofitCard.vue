<template>
  <div class="row">
    <div class="col-12">
      {{ nonprofitOrg.name }}
      <a v-if="nonprofitOrg.url" :href="nonprofitOrg.url">{{
        nonprofitOrg.url
      }}</a>
    </div>
    <div class="col-12">
      {{ nonprofitOrg.description }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'CodeOrgCard',
  props: {
    nonprofitOrg: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
