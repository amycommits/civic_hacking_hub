<template>
  <div>
    <h1>Nonprofits</h1>
    <nuxt-link to="/nonprofit/create">Create New</nuxt-link>
    <!-- <nonprofit-org-wrapper :nonprofits="nonprofits" /> -->
  </div>
</template>
<script>
// import NonprofitOrgWrapper from '../../components/nonprofit_orgs/NonprofitWrapper'
import InternalService from '@/api/InternalService'

export default {
  name: 'NonprofitIndex',
  // components: {
  //   NonprofitOrgWrapper
  // },
  data() {
    return {
      nonprofits: []
    }
  },
  asyncData(context) {
    return InternalService.nonprofits().then((result) => {
      return { nonprofits: result.data }
    })
  }
}
</script>
