import InternalService from '../api/InternalService'
const cookieparser = process.server ? require('cookieparser') : undefined

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
    InternalService.findProject({ id }).then((results) => {
      commit('SET_PROJECT', results.data.project)
    })
  },
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    const cookies = req.headers.cookie
    if (cookies) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        const userInfo = JSON.parse(parsed.userInfo)
        auth = userInfo.accessToken // {}
        commit('user/SET_AUTH', auth)
      } catch (err) {
        console.log('it errored?')
        console.log(err)
        // No valid cookie found
      }
    }
    // commit('user/SET_AUTH', auth)
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
