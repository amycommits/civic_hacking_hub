<template>
  <div class="row">
    <h1 class="col-12">Coding Organizations</h1>
    <nuxt-link to="/coding_org/create">Create New</nuxt-link>
    <div>
      <code-org-wrapper :codeOrgs="codeOrgs" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CodeOrgWrapper from '../../components/code_orgs/CodeOrgWrapper'

export default {
  name: 'CodeOrgIndex',
  components: {
    CodeOrgWrapper
  },
  computed: {
    ...mapGetters(['codeOrgs'])
  },
  mounted() {
    this.$store.dispatch('setCodeOrgs')
  }
}
</script>
