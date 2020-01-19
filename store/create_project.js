import InternalService from '~/api/InternalService'
export const state = () => ({
  codingOrg: null,
  nonprofitOrgs: null
})

export const actions = {
  setOrg({ commit }, info) {
    commit('SET_ORG', info)
  },
  submitNewProject({ rootState, commit, state }, info) {
    info.user_created_id = rootState.user.info.id
    info.code_organization_id = state.codingOrg
    info.nonprofit_organization_id = state.nonprofitOrgs
    InternalService.createProject(info).then((result) => {
      commit('SUBMIT_NEW_PROJECT', info)
    })
  }
}

export const mutations = {
  SET_ORG(state, info) {
    state[info.name] = info.item
  },
  SUBMIT_NEW_PROJECT(state, info) {
    // stuff
  }
}
