<template>
  <div class="row">
    <h1 class="col-12">Create a New Project</h1>
    <div class="col-12">
      <label for="name" class="col-sm-12 col-md-6">Name</label>
      <input v-model="info.name" type="text" />
    </div>
    <div class="col-12">
      <label for="description" class="col-sm-12 col-md-6">Description</label>
      <textarea v-model="info.description" type="text" />
    </div>
    <div class="col-12">
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
    <div class="col-sm-12 col-md-6">
      <label for="github_link">Github Link</label>
      <input v-model="info.github_link" type="text" />
    </div>
    <div class="col-sm-12 col-md-6">
      <label for="setup_link">Setup Instructions Link</label>
      <input v-model="info.setup_link" type="text" />
    </div>
    <div>
      <button @click="handleClick">SUBMIT</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CustomSelect from '~/components/CustomSelect'

export default {
  name: 'CreateProject',
  components: {
    CustomSelect,
  },
  middleware: 'authenticated',
  data() {
    return {
      info: {
        name: null,
        description: null,
        github_link: null,
        setup_link: null,
      },
    }
  },
  computed: {
    ...mapGetters(['codeOrgs', 'nonprofitOrgs']),
    ...mapGetters('user', ['userId']),
  },
  mounted() {
    this.$store.dispatch('setCodeOrgs')
    this.$store.dispatch('setNonProfitOrgs')
  },
  methods: {
    handleClick() {
      this.$store
        .dispatch('create_project/submitNewProject', this.info)
        .then(() => {
          this.$router.push('/')
        })
    },
  },
}
</script>
