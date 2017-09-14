<template>
  <div>
    <button v-if='userid !== null' class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    + Add new article
  </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <form @submit.prevent='submitArticle(formArticle)'>
        <div class="form-group">
        <label for="title">Title</label>
        <input v-model='formArticle.title' type="text" class="form-control" id="title" placeholder="Title">
        </div>
        <div class="form-group">
        <label for="body">Category</label>
        <select v-model='formArticle.category' class="custom-select">
          <option selected>Select your category</option>
          <option value="love">love</option>
          <option value="body">body</option>
          <option value="coding">coding</option>
        </select>
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea v-model='formArticle.content' class="form-control" id="content" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formArticle: {
        title: null,
        category: null,
        content: null
      }
    }
  },
  methods: {
    ...mapActions([
      'submitArticle'
    ])
  },
  computed: mapState([
    'userid'
  ])
}
</script>

<style scoped>

</style>
