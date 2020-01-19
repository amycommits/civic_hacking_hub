import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  projects() {
    return apiClient.get('projects')
  },
  nonprofits() {
    return apiClient.get('nonprofit_orgs')
  },
  codeOrgs() {
    return apiClient.get('code_orgs')
  },
  findProject(id) {
    return apiClient.post('project', id)
  },
  createProject(info) {
    return apiClient.post('project/new', info)
  },
  createCodeOrg(info) {
    return apiClient.post('code_org/new', info)
  },
  createNonprofitOrg(info) {
    return apiClient.post('nonprofit_org/new', info)
  },
  registerUser(info) {
    return apiClient.post('auth/local/registration', info)
  },
  loginUser(info) {
    return apiClient.post('auth/local/login', info)
  }
}
