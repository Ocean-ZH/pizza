<template>
  <div class="home"  id="home-head">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="row bg-gray">
      <div class="col sol-sm-12 text-center ">
        <h2><strong>50%</strong> off Cheese Pizza today!</h2>
        <h4>START YOUR ORDER!</h4>
        <div class="col-sm-12 text-center">
          <button v-on:click="gotoMenu" class="btn btn-success">Let's Order!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods:{
    gotoMenu(){
      this.$router.push({name:'menu'})
    }
  }
}
</script>

<style lang="less" scoped>
  #home-head{
    background: #ddd url('../assets/wonderful-pizza-wallpaper-201-250-hd-wallpapers.jpg') center center;
    background-size: cover;
    padding: 10%;
    height: 80vh;
    color:#333;
  }
  .bg-gray{
    background-color: rgba(255,255,255,.7);
    padding: 10%;
  }
</style>
