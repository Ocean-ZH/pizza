<template>
  <div class="card text-dark bg-light mb-3 history-box">
    <div class="card-header">
      点餐历史
    </div>
    <div class="card-body">
      <!-- <h4 class="card-title">
        <p>Here show you your historical ordering</p>
      </h4> -->
      <ul class="list-group">
        <li class="list-group-item" v-for="item in carts" :key="item.date" >
          <p>
            时间：{{ item.date | parseDate }}
          </p>
          <p v-for="(cart,i) in item.carts" :key="i">
            <b>{{ cart.name }} {{cart.size}}寸: </b><span>{{ cart.quantity }}个</span>
          </p>
          <p>
            总额: {{item.subtotal}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      carts:[],
    }
  },
  filters:{
    parseDate(timestamp){
      if(!timestamp) return '';
      let d = new Date(timestamp);
      return d.toLocaleString();
    }
  },
  created(){
    this.axios.get('/carts.json')
    .then(res=>{
      console.log(res)
      let userId = this.$store.getters.userId;
      let data = res.data;
      let dataArr = [];
      for(let key in data){
        dataArr.push(data[key])
      }
      let result = dataArr.filter(el=>{
        return el.userid == userId;
      })
      this.carts = result;
    })
    .catch(err=>{
      console.log(err)
      alert(err)
    })
  },
}
</script>

<style lang="less" scoped>
.history-box{
  max-height:80vh;
  overflow:auto;
}
</style>