export default {
    SET_BOOKS (state, data) {
        state.books = data
    },
    SET_CLASSIFY (state, data) {
        state.classify = data
    },
    SHOW_ALL (state, obj) {
        state.completeWorks = obj
    },
    SHOW_MORE (state, obj) {
        for (let i = 0; i < state.books.length; i++) {
            if (state.books[i].classify_id === obj) {
                state.moreData.push(state.books[i])
            }
        }
    },
    GET_PHONE (state, phone) {
        state.phone = phone
    },
    GET_NAME (state, name) {
        state.name = name
    },
    TIJIAO (state, obj) {
        console.log(obj)
        state.userInfo = obj
        console.log(state.userInfo)
    },
    LOGIN (state, data) {
        state.userInfo = data
    }
}