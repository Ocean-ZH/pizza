import Vue from 'vue'
import Vuex from 'vuex'

import menu from './store.menu.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:'',
    userId:'',
    isLogin:false,
  },
  getters:{
    currentUser:state=>state.currentUser,
    userId:state=>state.userId,
    isLogin: state => state.isLogin,
  },
  mutations: {
    userStatus(state,user){
      if(user){
        state.currentUser = user.email;
        state.userId = user.id;
        state.isLogin = true
      }else{
        state.currentUser = null;
        state.userId = null;
        state.isLogin = false
      }
    },
  },
  actions: {
    setUser({commit},user){
      // console.log(user)
      commit("userStatus",user)
    },
  },
  modules:{
    menu,
  }
})
