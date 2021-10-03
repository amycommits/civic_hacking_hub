<template>
  <div>
    <label :for="identifier">{{ displayName }}</label>
    <select
      :id="identifier"
      v-model="selectedItem"
      :name="identifier"
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
      default: () => [],
    },
    identifier: {
      type: String,
      default: null,
    },
    displayName: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      selectedItem: null,
    }
  },
  methods: {
    setOrgPicked(orgName) {
      this.$store.dispatch('create_project/setOrg', {
        name: orgName,
        item: this.selectedItem,
      })
    },
  },
}
</script>
