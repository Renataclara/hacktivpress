import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mainlist: [],
    userid: localStorage.getItem('id'),
    name: localStorage.getItem('name')
  },

  mutations: {
    logout (state) {
      state.userid = ''
      state.name = ''
      localStorage.removeItem('name')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
    },
    login (state) {
      state.userid = localStorage.getItem('id')
      state.name = localStorage.getItem('name')
    },
    masterlist (state, payload) {
      state.mainlist = payload
      console.log('this is mainlist at store', state.mainlist)
    },
    saveQuestion (state, payload) {
      state.mainlist.push(payload)
      console.log('question yg baru di save', payload)
    },
    savedEdited (state, payload) {
      console.log('id question yg mau di edit', payload._id)
      console.log('data edited', payload)
      const idxedt = state.mainlist.findIndex((list) => (list._id === payload._id))
      console.log('the index of the edited', idxedt)
      console.log('the index of the edited isinya', state.mainlist[idxedt])
      state.mainlist[idxedt].title = payload.title
      state.mainlist[idxedt].content = payload.content
      state.mainlist[idxedt].category = payload.category
      console.log('result of edited', state.mainlist[idxedt])
    },
    deleteQuestion (state, payload) {
      // console.log('id question yg mau di delete', payload)
      // const idx = state.mainlist.findIndex((list) => (list._id === payload))
      // console.log('the index of the deleted', idx)
      // state.mainlist.splice(idx, 1)
      const filteredQuestion = state.mainlist.filter((list) => list._id !== payload)
      console.log('the filtered questions', filteredQuestion)
      state.mainlist = filteredQuestion
    }
  },
  actions: {
    logout (state) {
      state.userid = ''
      state.name = ''
      localStorage.removeItem('name')
      localStorage.removeItem('token')
      localStorage.removeItem('id')
    },
    login (state) {
      state.userid = localStorage.getItem('id')
      state.name = localStorage.getItem('name')
    },
    getArticles ({ commit }, payload) {
      axios.get('http://localhost:3000')
        .then(function (response) {
          console.log('this is the data', response.data)
          commit('masterlist', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    submitQuestion ({ commit, state }, payload) {
      console.log('halo sblm axios')
      console.log('this is the payload to submit new question in store', payload)
      axios.post('http://localhost:3000', payload, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((data) => {
        console.log('this is the one !!!Q##@', data.data)
        // data.data.author = {
        //   _id: state.userid,
        //   name: state.name
        // }
        commit('saveQuestion', data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteArticle ({ commit }, questionid) {
      axios.delete(`http://localhost:3000/${questionid}`, {
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((data) => {
        console.log('hasil delete', data)
        commit('deleteQuestion', questionid)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    editArticle ({ commit }, payload) {
      console.log('ini payload!!', payload)
      axios.put(`http://localhost:3000/${payload._id}`, payload,
        {
          headers: {
            token: localStorage.getItem('token')
          }
        }
      )
      .then((data) => {
        window.$('#exampleModalLong').modal('hide')
        commit('savedEdited', payload)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
})

export default store
