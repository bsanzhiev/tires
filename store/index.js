const state = {
  searchTerm: "",
  searchResult: [],
  options: [
    { id: 1, label: "Option1" },
    { id: 2, label: "Option2" },
    { id: 3, label: "Option3" },
    { id: 4, label: "Option4" },
    { id: 5, label: "Option5" },
  ],
  selectedOptions: null,
  minPrice: 0,
  maxPrice: 0,
  seasons: [],
  radius: [],
  wide: [],
  height: [],
};

const mutations = {
  setSearchTerm(state, term) {
    state.searchTerm = term;
  },
  setSearchResult(state, result) {
    state.searchResult = result;
  },
  setOptions(state, options) {
    state.options = options;
  },
  setSelectedOptions(state, option) {
    state.selectedOptions = option;
  },
};

const actions = {
  search({ commit }, term) {
    const results = [
      { id: 1, name: "Product A", description: "This is product A" },
      { id: 2, name: "Product B", description: "This is product B" },
      { id: 3, name: "Product C", description: "This is product C" },
      { id: 4, name: "Product D", description: "This is product D" },
      { id: 5, name: "Product E", description: "This is product E" },
    ];
    commit("setSearchResult", results);
    commit("setSearchTerm", term);
  },
  fetchOptions({ commit }) {
    // Here you can fetch your options from an API or other data source
    // For simplicity, we'll just set the options directly
    const options = [
      { id: 1, label: "Option1" },
      { id: 2, label: "Option2" },
      { id: 3, label: "Option3" },
      { id: 4, label: "Option4" },
      { id: 5, label: "Option5" },
    ];
    commit('setOptions', options);
  },
};

const getters = {
  searchTerm: (state) => state.searchTerm,
  searchResult: (state) => state.searchResult,
  options: (state) => state.options,
  selectedOptions: (state) => state.selectedOptions,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};