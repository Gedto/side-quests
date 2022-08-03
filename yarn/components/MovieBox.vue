<template>
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img v-if="movie.poster_path"
          class="card-img-top"
           data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
           alt="Movie image not found"
           style="height: 225px; width: 100%; display: block;"
           :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
           data-holder-rendered="true">
      <img v-else src="https://image.tmdb.org/t/p/w500/7a2SLjgn0NOUQZlj4Bz0kIcamY6.jpg" alt="kot">
      <div class="card-body">
        <h3>{{ movie.title }}</h3>
        <p class="card-text">{{ movie.overview }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="text-muted">
            {{ movie.release_date }}
          </div>
          <small class="text-muted">{{ movie.vote_average }}</small>
        </div>
      </div>
      <button v-if="isFavourite()" @click="deleteFavourites" class="remove-fav">
        Remove from favourites
      </button>
      <button v-else @click="addToFavourites" class="add-fav">
        Add to favourites
      </button>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
   },
  computed: {
    ...mapGetters({
      movies: 'favorites/movieList'
    })
  },
  methods: {
    addToFavourites() {
      this.$store.dispatch('favorites/addToFavourites', this.movie)

      if (this.$route.query.search) {
        this.$store.dispatch('movies/search', { query: this.$route.query.search })
      } else {
        this.$store.dispatch('movies/pull')
      }

    },
    deleteFavourites() {
      this.$store.dispatch('favorites/deleteFavourites', this.movie)

      if (this.$route.query.search) {
        this.$store.dispatch('movies/search', { query: this.$route.query.search })
      } else {
        this.$store.dispatch('movies/pull')
      }
    },
    isFavourite() {
      const storageName = 'favourites'
      const fav_movies = JSON.parse(localStorage.getItem(storageName)) || []
      return fav_movies.some(movie => movie.id === this.movie.id)
    }
  }
}
</script>

<style>

</style>
