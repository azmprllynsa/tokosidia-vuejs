import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    peopleDetail: [],
    modalLogin: false
  },
  mutations: {
    SET_PEOPLE_DETAIL (state, peopleDetail) {
      state.peopleDetail = peopleDetail
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
