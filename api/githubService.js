import axios from 'axios'

const github = axios.create({
    baseURL: 'https://api.github.com/'
})

export default {
    nonprofitsRepo() {
        return github.get('/search/repositories', {
            params: {
              q: encodeURIComponent('nonprofit in:description in:name'),
            },
          })
    },
}