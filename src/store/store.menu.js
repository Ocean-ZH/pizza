
const state = {
    menuItems: [],
}

const getters = {
    getMenuItems: state => state.menuItems,
}

const mutations = {
    setMenuItems(state,data){
      state.menuItems = data;
    },
    removeMenuItem(state,data){
      state.menuItems.forEach((item,index)=>{
        if(item == data){
          state.menuItems.splice(index,1)
        }
      })
    },
    addMenuItem(state,data){
      state.menuItems.push(data)
    },
}

const actions = {
  /* test(context,data){
    console.log(context)
    console.log(data)
  } */
}

export default {
    state,
    getters,
    mutations,
    actions,
}