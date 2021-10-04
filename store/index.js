import InternalService from '../api/InternalService'
import githubService from '~/api/githubService'
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  projects: null,
  project: null,
  nonprofitOrgs: [],
  codeOrgs: [],
  nonprofits: [],
})

export const getters = {
  projects: (state) => state.projects,
  nonprofitOrgs: (state) => state.nonprofitOrgs,
  nonprofits: (state) => state.nonprofits,
  codeOrgs: (state) => state.codeOrgs,
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
  setNonProfitOrgs({ commit }) {
    InternalService.nonprofits().then((results) => {
      commit('SET_NONPROFIT_ORGS', results.data)
    })
  },
  setCodeOrgs({ commit }) {
    InternalService.codeOrgs().then((results) => {
      commit('SET_CODE_ORGS', results.data)
    })
  },
  setNonprofitRepos({ commit }) {
    return githubService.nonprofitsRepo().then((results) => {
      commit('SET_NONPROFIT_REPOS', results.data)
    })
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
  },
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  },
  SET_NONPROFIT_ORGS(state, nonprofitOrgs) {
    state.nonprofitOrgs = nonprofitOrgs
  },
  SET_CODE_ORGS(state, codeOrgs) {
    state.codeOrgs = codeOrgs
  },
  SET_NONPROFIT_REPOS(state, nonprofits) {
    state.nonprofits = nonprofits
  },
}
