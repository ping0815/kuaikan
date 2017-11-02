export default {
    SET_BOOKS (state, data) {
        state.books = data
    },
    SET_CLASSIFY (state, data) {
        state.classify = data
    },
    SHOW_ALL (state, obj) {
        state.completeWorks = obj
    }
}