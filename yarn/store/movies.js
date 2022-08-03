const storageName = 'favourites'

export const state = () => ({
  movieList: [],
  loading: false,
})

export const getters = {
  movieList: state => state.movieList,
  loading: state => state.loading
}

export const mutations = {
  SET_MOVIES(state, movieList) {
    state.movieList = movieList
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  }
}

export const actions = {

  async pull({ commit }) {
    commit('SET_LOADING', true)
    const response = await this.$axios.$get('https://api.themoviedb.org/3/movie/top_rated?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&page=1')
    const fav_movies = JSON.parse(localStorage.getItem(storageName)) || []
    const newArray = []
    response.results.forEach(a =>  {
      if (fav_movies.some(movie => movie.id === a.id)) {
        a.added = true
      }
      newArray.push(a)
    })

      commit('SET_MOVIES', newArray)
      commit('SET_LOADING', false)
  },

  async search({ commit }, params) {
    commit('SET_LOADING', true)
    const response = await this.$axios.$get('https://api.themoviedb.org/3/search/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80', { params })
    commit('SET_MOVIES', response.results)
    commit('SET_LOADING', false)
  }
}
