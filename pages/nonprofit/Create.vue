<template>
  <div>
    <h1>New Nonprofit organizations</h1>
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="info.name" type="text" name="name" />
      <label for="url">Website</label>
      <input id="url" v-model="info.url" type="text" name="url" />
      <label for="desc">Description</label>
      <textarea
        id="desc"
        v-model="info.description"
        name="desc"
        cols="30"
        rows="10"
      ></textarea>
      <button @click="handleSubmission">CREATE</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateNonprofitOrg',
  data() {
    return {
      info: {
        name: null,
        url: null,
        description: null,
      },
    }
  },
  methods: {
    handleSubmission() {
      this.$store.dispatch('createNonprofit', this.info).then(() => {
        this.$router.push('/nonprofit')
      })
    },
  },
}
</script>
