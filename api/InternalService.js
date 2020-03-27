import axios from 'axios'

export default {
  projects() {
    return axios
      .get('/api/projects')
      .catch(console.log('projects are the weak link'))
  },
  nonprofits() {
    return axios
      .get('/api/nonprofit_orgs')
      .catch(console.log('nonprofits are the weak link'))
  },
  codeOrgs() {
    return axios
      .get('/api/code_orgs')
      .catch(console.log('code orgs are the weak link'))
  },
  findProject(id) {
    return axios
      .post('/api/project', id)
      .catch(console.log('find project is the weak link'))
  },
  createProject(info) {
    return axios
      .post('/api/project/new', info)
      .catch(console.log('create project are the weak link'))
  },
  createCodeOrg(info) {
    return axios.post('/api/code_org/new', JSON.stringify(info))
  },
  createNonprofitOrg(info) {
    return axios.post('/api/nonprofit_org/new', info)
  },
  registerUser(info) {
    return axios.post('/api/auth/local/registration', info)
  },
  loginUser(info) {
    return axios.post('/api/auth/local/login', info)
  }
}
