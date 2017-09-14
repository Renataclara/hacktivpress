<template>
  <div>
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
        <p>{{article.content}}</p>
        <router-link :to="`author/${article.author._id}`">
          <h5 class="mb-1">
            <span class="badge badge-dark"> by {{article.author.name}}</span>
          </h5>
        </router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticle () {
      this.$http.get(`/${this.id}`)
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
