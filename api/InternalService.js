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
  findProject(id) {
    return apiClient.post('project', id)
  },
  registerUser(info) {
    return apiClient.post('auth/local/registration', info)
  },
  loginUser(info) {
    return apiClient.post('auth/local/login', info)
  }
}
