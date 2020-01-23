import InternalService from '../api/InternalService'
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  projects: null,
  project: null
})

export const getters = {
  projects: (state) => state.projects
}

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
  createCodeOrg({ commit }, info) {
    InternalService.createCodeOrg(info)
  },
  createNonprofit({ commit }, info) {
    InternalService.createNonprofitOrg(info)
  },
  nuxtServerInit({ dispatch, commit }, { req }) {
    const cookies = req.headers.cookie
    if (cookies) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        const auth = JSON.parse(parsed.auth).accessToken
        const userInfo = JSON.parse(parsed.user).accessToken
        commit('user/SET_AUTH', auth)
        commit('user/SET_INFO', userInfo)
      } catch (err) {
        // eslint-disable-next-line
        console.log('it errored?')
        // eslint-disable-next-line
        console.log(err)
        // No valid cookie found
      }
    }
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
