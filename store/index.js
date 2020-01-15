import InternalService from '../api/InternalService'
export const state = () => ({
  projects: null,
  project: null
})

export const actions = {
  setProjects({ commit }) {
    InternalService.projects().then((results) => {
      if (results.data && results.data.projects.length > 0) {
        commit('SET_PROJECTS', results.data.projects)
      } else {
        commit('SET_PROJECTS', [])
      }
    })
  },
  findProject({ commit }, id) {
    // const formData = new FormData()
    // formData.append('id', id)
    InternalService.findProject({ id }).then((results) => {
      commit('SET_PROJECT', results.data.project)
    })
  }
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  }
}
