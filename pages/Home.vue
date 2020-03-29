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
import { mapGetters } from 'vuex'
import CustomSelect from '~/components/CustomSelect'

export default {
  name: 'Home',
  components: {
    CustomSelect
  },
  computed: {
    ...mapGetters(['codeOrgs', 'nonprofitOrgs'])
  },
  mounted() {
    this.$store.dispatch('codeOrgs')
    this.$store.dispatch('nonprofitOrgs')
  }
}
</script>
