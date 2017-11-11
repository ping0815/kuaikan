import http from 'axios'
import api from '@/api'
import router from '@/router'
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
    },
    showMore ({commit}, obj) {
        commit('SHOW_MORE', obj)
    },
    //注册
    getPhone ({commit}, phone) {
        if (/^1[3578]\d{9}$/.test(phone)) {
            commit('GET_PHONE', phone)
        } else {
            console.log('手机号码错误!!!')
        }
    },
    tijiao (store, obj) {
        console.log(obj)
        if (/^\w{8,30}$/.test(obj.psd) && /^[\u4e00-\u9fa5]{3,}$/.test(obj.name)) {
            let url = api.host + 'users'
            console.log(url)
            http.get(url)
                .then(res => {
                    if (res.data.length > 0) {
                        for (let i = 0; i < res.data.length; i++) {
                            console.log(res.data)
                            if (res.data[i].name !== obj.name) {
                                store.state.showBol = false
                                let userObj = {
                                    phone: store.state.phone,
                                    name: obj.name,
                                    psd: obj.psd
                                }
                                return http.post(url, userObj)
                                .then(res => {
                                    store.commit('TIJIAO', userObj)
                                    router.push('./mine')                
                                })
                            } else {
                                store.state.showBol = true
                            }
                        }
                    } else {
                        let userObj = {
                            phone: store.state.phone,
                            name: obj.name,
                            psd: obj.psd
                        }
                        return http.post(url, userObj)
                        .then(res => {
                            store.commit('TIJIAO', userObj)
                            router.push('./mine')                
                        })
                    }
                })     
        } else {
            alert('昵称或密码不符合!!!')
        }
    },
    //登录
    login (store, obj) {
        let url = api.host + 'users'
        return http.get(url)
          .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].phone === obj.phone && res.data[i].psd === obj.psd) {
                    store.state.phoneErrBol = false
                    store.commit('LOGIN', res.data[i])
                    router.push('./mine')
                } else {
                    store.state.phoneErrBol = true
                }
            }
          })
    }
}