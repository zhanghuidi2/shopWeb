const common = {
  state: {
    loadingTag: false
  },
  mutations: {
    CHANGE_LOADING (state, tag) {
      state.loadingTag = tag
    }
  }
}
export default common
