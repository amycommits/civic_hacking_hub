<template>
  <div>
    <label :for="identifier">{{ displayName }}</label>
    <select
      :name="identifier"
      :id="identifier"
      v-model="selectedItem"
      @change="setOrgPicked(identifier)"
    >
      <option
        v-for="item in items"
        :key="`${identifier}-${item.id}`"
        :value="item.id"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'CustomSelect',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    identifier: {
      type: String,
      default: null
    },
    displayName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    setOrgPicked(orgName) {
      this.$store.dispatch('create_project/setOrg', {
        name: orgName,
        item: this.selectedItem
      })
    }
  }
}
</script>
