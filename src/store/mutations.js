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
    }
}