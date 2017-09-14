<template>
  <div>
    <Addarticle></Addarticle>
    <div class="list-group" v-for='(list, index) in lists'>
      <div class="list-group-item list-group-item-action flex-column align-items-start">
      <!-- <router-link :to="`/home/${list._id}`" class="list-group-item list-group-item-action flex-column align-items-start"> -->

        <div class="d-flex w-100 justify-content-between">
          <router-link :to="`/${list._id}`"><h3 class="mb-1">{{list.title}}</h3>
          </router-link>

           <small>
             <!-- <router-link :to="`category/${list.category}`"> -->
               <h5>
                <span class="badge badge-primary">{{list.category}}</span>
              </h5>
            <!-- </router-link> -->
         </small>
        </div>
        <router-link :to="`author/${list.author._id}`">
          <h5 class="mb-1">
            <span class="badge badge-dark"> by {{list.author.name}}</span>
          </h5>
        </router-link>
         <small>
        <button type="button" @click="deleteArticle(`${list._id}`)" class="btn btn-outline-danger btn-sm">X</button>
         <!-- <small>by {{list.userid.name}}</small> -->
         <!-- <small v-if="list.userid.name === null">by {{list.name}}</small> -->
         <!-- <button type="button" @click="deleteArticle(`${list._id}`)" class="btn btn-outline-danger btn-sm">X</button> -->
         <!-- Button trigger modal -->
        <button type="button" @click="getArticle(`${list._id}`)" class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#exampleModalLong">
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
                <form @submit.prevent='editArticle(formQuestion)'>
                  <div class="form-group">
                  <label for="title">Article title</label>
                  <input v-model='formQuestion.title' type="text" class="form-control" id="title" placeholder="Article Title">
                  </div>
                  <div class="form-group">
                  <label for="body">Category</label>
                  <select v-model='formQuestion.category' class="custom-select">
                    <option value="love">love</option>
                    <option value="tech">tech</option>
                    <option value="music">music</option>
                  </select>
                  </div>
                  <div class="form-group">
                  <label for="content">Cotent</label>
                  <input v-model='formQuestion.content' type="text" class="form-control" id="content" placeholder="Content">
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>
        </small>
        <!-- end of modal -->
      <!-- </router-link> -->
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import Addarticle from '@/components/addarticle'

export default {
  components: {
    Addarticle
  },
  data () {
    return {
      // editquestions: [],
      // id: null,
      formQuestion: {
        title: null,
        category: null,
        content: null
      }
    }
  },
  methods: {
    ...mapActions([
      'getArticles',
      'deleteArticle',
      'editArticle'
      // 'vote'
    ]),
    // ,
    getArticle (id) {
      this.id = id
      this.$http.get(`/${id}`)
      // axios.get('http://localhost:3000')
      .then((data) => {
        this.editquestions = data.data
        console.log(this.editquestions, 'ini tohhh')
        this.formQuestion._id = this.editquestions[0]._id
        this.formQuestion.title = this.editquestions[0].title
        this.formQuestion.category = this.editquestions[0].category
        this.formQuestion.content = this.editquestions[0].content
        console.log('====================================')
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  computed: {
    lists () {
      return this.$store.state.mainlist
    }
    // ,
    // nets () {
    //   return this.$store.getters.nets
    // },
  },
  created () {
    // if (localStorage.getItem('token') == null) {
    //   this.$router.push({ path: '/signup' })
    // } else {
    this.getArticles()
    // }
  }
}
</script>

<style scoped>

</style>
