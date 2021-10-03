<template>
  <div>
    <div v-for="nonprofit in nonprofits" :key="nonprofit.id">
      <nonprofit-card :nonprofit-org="nonprofit" />
    </div>
  </div>
</template>
<script>
import NonprofitCard from '@/components/nonprofit_orgs/NonprofitCard'
export default {
  name: 'NonprofitWrapper',
  components: {
    NonprofitCard,
  },
  props: {
    nonprofits: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
