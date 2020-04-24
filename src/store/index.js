import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    dataForm: {
      fullname: '',
      email: '',
      password: '',
      password2: '',
      currentForm: false,
      errorName: false,
      errorEmail: false,
      errorPassword: false,
      errorPassword2: false,
      typePassword: 'password',
      hiddenPassword: true
    },
    peopleDetail: [],
    modalLogin: false
  },
  getters: {
    dataForm: state => state.dataForm
  },
  mutations: {
    SET_PEOPLE_DETAIL (state, peopleDetail) {
      state.peopleDetail = peopleDetail
    },
    TOGGLE_HIDDEN (state) {
      state.dataForm.hiddenPassword = !state.dataForm.hiddenPassword
      if (state.dataForm.hiddenPassword) state.dataForm.typePassword = 'password'
      if (!state.dataForm.hiddenPassword) state.dataForm.typePassword = 'text'
    },
    CHECK_NAME (state) {
      if (state.dataForm.fullname.length > 0) state.dataForm.errorName = false
      else state.dataForm.errorName = true
    },
    CHECK_EMAIL (state) {
      const emailVerify = state.dataForm.email.match(/^\w+[\w.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      if (emailVerify === null && state.dataForm.email.length > 0) state.dataForm.errorEmail = true
      else state.dataForm.errorEmail = false
    },
    CHECK_PASSWORD (state) {
      if (state.dataForm.password.length <= 0) state.dataForm.errorPassword = true
      else state.dataForm.errorPassword = false
    },
    CHECK_PASSWORD2 (state) {
      if (state.dataForm.password2 !== state.dataForm.password || state.dataForm.password2.length === 0) state.dataForm.errorPassword2 = true
      else state.dataForm.errorPassword2 = false
    },
    SUBMIT_EMAIL (state) {
      if (state.dataForm.email.length === 0 || state.dataForm.errorEmail) return
      state.dataForm.currentForm = true
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
