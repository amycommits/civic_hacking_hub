<template>
  <div class="row">
    <h1 class="col-12">Coding Organizations</h1>
    <div v-for="org in codeOrgs" :key="org.id" class="col-12 code-org-section">
      <code-org-card :codeOrg="org" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CodeOrgCard from '../../components/code_orgs/CodeOrgCard'
export default {
  name: 'CodeOrgIndex',
  components: {
    CodeOrgCard
  },
  computed: mapState({
    codeOrgs: (state) => state.codeOrgs
  }),
  mounted() {
    this.$store.dispatch('fetchCodeOrganizations')
  }
}
</script>
