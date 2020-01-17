import InternalService from '../api/InternalService'
const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  auth: null
})

export const actions = {
  setRegistration({ commit }, info) {
    InternalService.registerUser(info).then((result) => {
      InternalService.loginUser(info)
        .then((result) => {
          if (result.data.id) {
            commit('SET_AUTH', result.data)
            Cookie.set('auth', { accessToken: result.data.oauth_token })
            Cookie.set('user', { accessToken: result.data })
          }
        })
        .then(() => {
          this.$router.push('/')
        })
    })
  },
  login({ commit }, info) {
    InternalService.loginUser(info).then((result) => {
      console.log(result)
      console.log('@@@@@@@')
      if (result.data.id) {
        commit('SET_AUTH', result.data)
        Cookie.set('auth', { accessToken: result.data.oauth_token })
        Cookie.set('user', { accessToken: result.data })
        this.$router.push('/')
      }
    })
  }
}

export const mutations = {
  SET_AUTH(state, result) {
    console.log('setting the auth')
    console.log(result)
    state.auth = result
  }
}
