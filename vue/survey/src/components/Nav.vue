<template>
  <header>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <!-- Navbar brand -->
        <router-link to="/" class="navbar-brand" href="#">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="16" alt="" loading="lazy"
            style="margin-top: -3px;" />
        </router-link>
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link to="/" tag="li" class="nav-item">
                <a class="nav-link" aria-current="page" href="#intro">
                  Home
                </a>
              </router-link>
              <router-link to="/adm" tag="li" class="nav-item">
                <a class="nav-link" href="#" rel="nofollow">Admin</a>
              </router-link>
          </ul>

          <ul class="navbar-nav d-flex flex-row">
            <!-- Icons -->
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://github.com/Treefr0gy" rel="nofollow" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>
  export default {
    created() {

    },

    data() {
      return {

      }
    },

    methods: {

    }
  }
</script>