export const state = () => ({
  projects: null
})

export const actions = {
  setProjects({ commit }) {
    const projects = [
      {
        id: 1,
        name: 'Diaper Base',
        description:
          'A Ruby on Rails application that does warehouse managemtn for diaper banks',
        codeOrganization: 'Ruby For Good',
        nonprofitOrganization: 'Multiple diaper banks',
        techStack: ['Ruby on Rails', 'erb', 'Ruby'],
        github_link: 'https://github.com/rubyforgood/diaper',
        setup_link:
          'https://github.com/rubyforgood/diaper/blob/master/installation.md'
      }
    ]
    commit('SET_PROJECTS', projects)
  }
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  }
}
