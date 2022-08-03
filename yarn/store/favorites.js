const storageName = 'favourites'

export const state = () => ({
  movieList: JSON.parse(localStorage.getItem(storageName)) || [],
  loading: false,
})

export const getters = {
  movieList: state => state.movieList,
  loading: state => state.loading
}

export const mutations = {
  ADD_MOVIES(state, movie)  {
    state.movieList = [...state.movieList, movie]
  },
  DELETE_MOVIES (state, id) {
    state.movieList = state.movieList.filter(movie => movie.id !== id)
  },
  UPDATE_STORAGE (state) {
    localStorage.setItem(storageName, JSON.stringify(state.movieList))
  }
}

export const actions = {
  addToFavourites({ commit }, movie) {
    commit('ADD_MOVIES', movie)
    commit('UPDATE_STORAGE')
  },
  deleteFavourites({ commit }, movie) {
    commit('DELETE_MOVIES', movie.id)
    commit('UPDATE_STORAGE')
  }
}
