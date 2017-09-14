<template>
  <div>
    <h1>Category</h1>
    <h2>{{articles[0].category}}</h2>
    <div v-for='(article , idx) in articles'>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <router-link :to="`/${article._id}`"><h3 class="mb-1">{{article.title}}</h3>
          </router-link>
           <small>
             <h5>
              <span class="badge badge-primary">{{article.category}}</span>
            </h5>
         </small>
        </div>
          <h5 class="mb-1">
            <span class="badge badge-dark"> by {{article.author.name}}</span>
          </h5>
        </div>
    </div>
  </div>
</template>

<script>
// var axios = require('axios')
export default {
  props: ['cat'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticle () {
      // console.log('halo sblm axios')
      // var self = this
      this.$http.get(`category/${this.cat}`)
      // axios.get('http://localhost:3000')
      .then((data) => {
        this.articles = data.data
        console.log(this.articles, 'this is self articles per cat')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.getArticle()
  },
  watch: {
    cat () {
      this.getArticle()
    }
  }
}
</script>

<style>

</style>
