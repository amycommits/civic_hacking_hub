<template>
  <div>
    <custom-select
      :items="codeOrgs"
      identifier="codingOrg"
      display-name="Coding Organizations"
    />
    <custom-select
      :items="nonprofitOrgs"
      identifier="nonprofitOrgs"
      display-name="Nonprofit Organizations"
    />
  </div>
</template>
<script>
import CustomSelect from '~/components/CustomSelect'
import InternalService from '~/api/InternalService'

export default {
  name: 'Home',
  components: {
    CustomSelect
  },
  data() {
    return {
      codeOrgs: [],
      nonprofitOrgs: null
    }
  },
  asyncData(context) {
    return InternalService.codeOrgs().then((codeOrgResults) => {
      return InternalService.nonprofits().then((nonprofitResults) => {
        return {
          codeOrgs: codeOrgResults.data,
          nonprofitOrgs: nonprofitResults.data
        }
      })
    })
  }
}
</script>
