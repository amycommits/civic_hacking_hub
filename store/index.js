export const state = () => ({
  projects: null
})

export const actions = {
  setProjects({ commit }) {
    const projects = []
    commit('SET_PROJECTS', projects)
  }
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  }
}
