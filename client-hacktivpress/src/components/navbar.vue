<template>
  <div>
    <nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Hacktivpress</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link disabled" to="/">Choose your category</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category/love">Love</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category/body">Body</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category/coding">Coding</router-link>
          </li>
          <li v-if='userid !== null' class="nav-item" @click='logout'>
            <router-link class="nav-link" to="/signin">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
</div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'logout'
    ])
  },
  computed: mapState([
    'userid',
    'name'
  ])
}
</script>

<style scoped>

</style>
