export const state = () => ({
  searchTerm: '',
  searchResult: []
})

export const mutations = {
   setSearchTerm(state, term) {
     state.searchTerm = term
  },
  setSearchResult(state, result) {
    state.searchResult = result
  }
}

export const actions = {
  search({ commit }, term) {
    const results = {}
      