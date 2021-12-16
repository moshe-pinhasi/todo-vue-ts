import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {todoStore} from './todo.store'

export default new Vuex.Store({
  // state: {
  //   loading: false
  // },
  // mutations,
  // actions,
  // getters

  modules: {
    todoStore
  }
})
