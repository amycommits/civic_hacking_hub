<template>
  <div>
    <h1>Nonprofits</h1>
    <div v-for="nonprofit in nonprofits" :key="nonprofit.id">
      <nonprofit-org-card :nonprofitOrg="nonprofit" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import NonprofitOrgCard from '../../components/nonprofit_orgs/NonprofitCard'
export default {
  name: 'NonprofitIndex',
  components: {
    NonprofitOrgCard
  },
  computed: mapState({
    nonprofits: (state) => state.nonprofitOrgs
  }),
  mounted() {
    this.$store.dispatch('fetchNonprofits')
  }
}
</script>
