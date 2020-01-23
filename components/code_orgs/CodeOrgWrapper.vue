<template>
  <div>
    <div v-for="org in codeOrgs" :key="org.id" class="col-12 code-org-section">
      <code-org-card :codeOrg="org" />
    </div>
  </div>
</template>
<script>
import CodeOrgCard from './CodeOrgCard'

export default {
  name: 'CodeOrgWrapper',
  components: {
    CodeOrgCard
  },
  props: {
    codeOrgs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
