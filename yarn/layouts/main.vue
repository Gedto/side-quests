<template>
  <div>
  <header>

    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <nuxtLink to="/" class="top-navs">Homepage</nuxtLink>
            </li>
            <li class="nav-item">
              <nuxtLink to="/favPage" class="top-navs">Favourites</nuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="p-5 text-center bg-light">
      <h1 class="mb-3">Heading</h1>
      <h4 class="mb-3">Subheading</h4>
      <a class="btn btn-primary" href="" role="button">Call to action</a>
    </div>

  </header>

    <Nuxt />



    <footer class="text-center text-lg-start bg-light text-muted">

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>

  </div>
</template>

<style>
.top-navs {
  margin: 10px;
}
</style>

<script>
export default {
  name: 'main'
}
</script>
