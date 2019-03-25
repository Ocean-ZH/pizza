import Vue from 'vue'
import Vuex from 'vuex'

import menu from './store.menu.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:'',
    isLogin:false,
  },
  getters:{
    currentUser:state=>state.currentUser,
    isLogin: state => state.isLogin,
  },
  mutations: {
    userStatus(state,user){
      if(user){
        state.currentUser = user;
        state.isLogin = true
      }else{
        state.currentUser = null;
        state.isLogin = false
      }
    },
  },
  actions: {
    setUser({commit},user){
      commit("userStatus",user)
    },
  },
  modules:{
    menu,
  }
})
