<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3 p-4 position-relative z-3" :style="{display:  currentPath ==='/homecontrol' || currentPath ==='/test'? 'none':'',}">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <div style="width: 50%">
          <img src="../assets/Group 43398.png" class="img-fluid" alt="" />
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.id">
            <router-link
              :class="{ 'nav-link': true, active: currentPath === link.path }"
              :to="link.path"
              exact
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
        <form class="d-flex gap-3 flex-wrap" role="search">
          <router-link to="/Login">
          <button class="btn btn-outline-success btn px-4 py-2" type="submit">
            sign in
          </button>
          </router-link>
          <router-link to="/register">
          <button class="btn btn-outline-success btn px-4 py-2" type="submit">
            sign up
          </button>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      links: [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Service", path: "/service" },
        { id: 3, name: "About Us", path: "/about" },
        { id: 4, name: "Connect with Us", path: "/contact" },
        { id: 5, name: "Find Your Place", path: "/find" },
        { id: 6, name: "Profile", path: "/profile" },
      ],
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.btn {
  background: linear-gradient(to left, #5f5aff, #fd0bb5);
  color: white;
  border: none;
}

.navbar-nav .nav-link:hover {
  color: var(--pink) !important;
}

.navbar-nav .nav-link.active {
  color: var(--pink) !important;
}
@media (max-width:1024px) {
  .navbar-nav {
    font-size: 14px;
  }
}
@media (max-width:11200px) {
  .navbar-nav {
    font-size: 14px;
  }
}
</style>
