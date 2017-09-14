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
        <button v-if="userid === article.author._id || userid === article.author" type="button" @click="deleteArticle(`${article._id}`)" class="btn btn-outline-danger btn-sm">X</button>
        <button v-if="userid === article.author._id || userid === article.author" type="button" @click="getArticle()" class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModalLong">
          Edit
        </button>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit Article</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent='editArticle(formArticle)'>
                  <div class="form-group">
                  <label for="title">Article title</label>
                  <input v-model='formArticle.title' type="text" class="form-control" id="title" placeholder="Article Title">
                  </div>
                  <div class="form-group">
                  <label for="body">Category</label>
                  <select v-model='formArticle.category' class="custom-select">
                    <option value="love">love</option>
                    <option value="tech">tech</option>
                    <option value="music">music</option>
                  </select>
                  </div>
                  <div class="form-group">
                  <label for="content">Cotent</label>
                  <textarea v-model='formArticle.content' class="form-control" id="content" rows="5" ></textarea>
                  <!-- <input v-model='formArticle.content' type="text" class="form-control" id="content" placeholder="Content"> -->
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>

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
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      articles: [],
      formArticle: {
        title: null,
        category: null,
        content: null
      }
    }
  },
  methods: {
    getArticle () {
      this.$http.get(`/${this.id}`)
      .then((data) => {
        this.articles = data.data
        console.log(this.articles, 'this is self articles per id')
        this.editarticle = data.data
        console.log(this.editarticle, 'ini tohhh')
        this.formArticle._id = this.editarticle[0]._id
        this.formArticle.title = this.editarticle[0].title
        this.formArticle.category = this.editarticle[0].category
        this.formArticle.content = this.editarticle[0].content
        console.log('====================================')
      })
      .catch((error) => {
        console.log(error)
      })
    },
    ...mapActions([
      'deleteArticle',
      'editArticle'
    ])
  },
  computed: {
    ...mapState([
      'userid'
    ])
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
