<template>
  <div>
    <form @submit.prevent="submit">
      <input
        :value="search"
        class=""
        type="text"
        placeholder="Search"
        @input="e => search = e.target.value"
      >
      <button type="submit"> search movies </button>
    </form>
    <div class="row">
      <movie-box v-for="(movie, i) in movies" :key="i" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieBox from '../components/MovieBox'
import debounce from 'lodash/debounce'

export default {
  components: {
    MovieBox
  },
  name: 'favPage',
  layout: 'main',
  computed: {
    ...mapGetters({
      movies: 'favorites/movieList',
      loading: 'movies/loading'
    })
  },
  watch: {
    '$route.query': debounce(function ({ search }) {
      if (search) {
        this.$store.dispatch('movies/search', { query: search })
      } else (
        this.$store.dispatch('movies/pull')
      )
    }, 200),
  },
  methods: {
    submit() {
      if (this.search.length > 0) {
        this.$router.push({ name: 'index', query: { search: this.search } })
      } else {
        this.$router.push({ name: 'index' })
      }
    }
  },
  mounted () {
    const params = {}
    if (this.search) {
      params.query = this.search
      this.$store.dispatch('movies/search', params)
    } else {
      this.$store.dispatch('movies/pull')
    }
  },
  data() {
    return {
      search: this.$route.query.search,
    }
  },
}
</script>
