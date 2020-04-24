import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    dataLogin: {
      input: {
        email: '',
        password: ''
      },
      currentForm: false,
      errorEmail: false,
      errorPassword: false,
      typePassword: 'password',
      hiddenPassword: true
    },
    peopleDetail: [],
    modalLogin: false
  },
  getters: {
    dataLogin: state => state.dataLogin
  },
  mutations: {
    SET_PEOPLE_DETAIL (state, peopleDetail) {
      state.peopleDetail = peopleDetail
    },
    TOGGLE_HIDDEN (state) {
      state.dataLogin.hiddenPassword = !state.dataLogin.hiddenPassword
      if (state.dataLogin.hiddenPassword) state.dataLogin.typePassword = 'password'
      if (!state.dataLogin.hiddenPassword) state.dataLogin.typePassword = 'text'
    },
    CHECK_EMAIL (state) {
      const emailVerify = state.dataLogin.input.email.match(/^\w+[\w.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      if (emailVerify === null && state.dataLogin.input.email.length > 0) state.dataLogin.errorEmail = true
      else state.dataLogin.errorEmail = false
    },
    SUBMIT_EMAIL (state) {
      if (state.dataLogin.input.email.length === 0 || state.dataLogin.errorEmail) return
      state.dataLogin.currentForm = true
    }
  },
  actions: {
    loadPeopleDetail ({ commit }) {
      axios
        .get('http://192.168.1.84:8000/api/v1/tokosidia/user/1')
        .then(res => {
          console.log(res.data)
          const peopleDetail = res.data
          commit('SET_PEOPLE_DETAIL', peopleDetail)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
