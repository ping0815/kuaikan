import http from 'axios'
import api from '@/api'
export default {
    setBooks ({commit}) {
      let url = api.host + 'books'
      http.get(url)
        .then(res => {
            commit('SET_BOOKS', res.data)
        })
    }
}