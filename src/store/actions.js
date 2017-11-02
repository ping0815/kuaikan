import http from 'axios'
import api from '@/api'
export default {
    setBooks ({commit}) {
      let url = api.host + 'books'
      http.get(url)
        .then(res => {
            commit('SET_BOOKS', res.data)
        })
    },
    setClassify ({commit}) {
        let url = api.host + 'classifys'
        http.get(url)
          .then(res => {
              commit('SET_CLASSIFY', res.data)
          })
    },
    showAll ({commit}, obj) {
        commit('SHOW_ALL', obj)
    }
}