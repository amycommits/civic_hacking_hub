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
import CodeOrgWrapper from '../../components/code_orgs/CodeOrgWrapper'
import InternalService from '@/api/InternalService'

export default {
  name: 'CodeOrgIndex',
  components: {
    CodeOrgWrapper
  },
  data() {
    return {
      codeOrgs: []
    }
  },
  asyncData(context) {
    return InternalService.codeOrgs().then((result) => {
      return { codeOrgs: result.data }
    })
  }
}
</script>
