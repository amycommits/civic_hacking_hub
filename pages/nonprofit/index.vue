<template>
  <div>
    <h1>Nonprofits</h1>
    <nuxt-link to="/nonprofit/create">Create New</nuxt-link>
    <nonprofit-org-wrapper :nonprofits="nonprofitOrgs" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NonprofitOrgWrapper from '../../components/nonprofit_orgs/NonprofitWrapper'

export default {
  name: 'NonprofitIndex',
  components: {
    NonprofitOrgWrapper
  },
  computed: {
    ...mapGetters(['nonprofitOrgs'])
  },
  mounted() {
    this.$store.dispatch('setNonProfitOrgs')
  }
}
</script>
