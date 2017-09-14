<template>
  <div>
    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    + Add new article
  </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <form @submit.prevent='submitQuestion(formQuestion)'>
        <div class="form-group">
        <label for="title">Title</label>
        <input v-model='formQuestion.title' type="text" class="form-control" id="title" placeholder="Title">
        </div>
        <div class="form-group">
        <label for="body">Category</label>
        <select v-model='formQuestion.category' class="custom-select">
          <option selected>Select your category</option>
          <option value="love">love</option>
          <option value="body">body</option>
          <option value="coding">coding</option>
        </select>
        </div>
        <div class="form-group">
          <label for="content">Content</label>
          <textarea v-model='formQuestion.content' class="form-control" id="content" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formQuestion: {
        title: null,
        category: null,
        content: null
      }
    }
  },
  methods: {
    ...mapActions([
      'submitQuestion'
    ])

  }
}
</script>

<style scoped>

</style>
