<template>
  <div>
    <div v-for='(article , idx) in articles'>
      <h3> {{article.title}} </h3><br>
      <p> {{article.content}} </p>
    </div>
  </div>
</template>

<script>
// var axios = require('axios')
export default {
  props: ['id'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticle () {
      // console.log('halo sblm axios')
      // var self = this
      this.$http.get(`/${this.id}`)
      // axios.get('http://localhost:3000')
      .then((data) => {
        this.articles = data.data
        console.log(this.articles, 'this is self articles per id')
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
    id () {
      this.getArticle()
    }
  }
}
</script>

<style>

</style>
