<template>
  <div id="app">
    <div class="container">
      <vHeader />
    </div>
    <div class="container">
      <router-view/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col col-sm-12 col-md-4">
          <router-view name="guide"></router-view>
        </div>
        <div class="col col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from './views/Header.vue'

export default {
  data(){
    return {
      
    }
  },
  components:{
    vHeader,
  }
}
</script>

<style lang="less" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
