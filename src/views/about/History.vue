<template>
  <div class="card text-dark bg-light mb-3 history-box">
    <div class="card-header">点餐历史</div>
    <div class="card-body">
      <h4 class="card-title" v-if="carts.length == 0">暂无历史数据</h4>
      <ul class="list-group">
        <li class="list-group-item mb-2" v-for="item in carts" :key="item.date">
          <div class="d-flex">
            <small>{{ item.date | parseDate }}</small>
            <span class="ml-auto cursor-pointer" @click="deleteHistory(item.id)">
              <font-awesome-icon icon="times-circle"/>
            </span>
          </div>
          <table class="table table-hover table-sm mb-2">
            <tbody>
              <tr v-for="(cart,i) in item.carts" :key="i">
                <td>
                  <b>{{ cart.name }} - {{cart.size}}寸 ({{ cart.price }}):</b>
                </td>
                <td class="text-left">
                  <span><b>{{ cart.quantity }}</b> 份</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="card-footer">总额: <b>{{item.subtotal}}</b> 元</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      carts: [],
      loaded:false,
    };
  },
  filters: {
    parseDate(timestamp) {
      if (!timestamp) return "";
      let d = new Date(timestamp);
      return d.toLocaleString();
    }
  },
  created() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      this.axios
        .get("/carts.json")
        .then(res => {
          // console.log(res)
          let userId = this.$store.getters.userId;
          let data = res.data;
          let dataArr = [];
          for (let key in data) {
            data[key].id = key;
            dataArr.push(data[key]);
          }
          let result = dataArr.filter(el => {
            return el.userid == userId;
          });
          result.reverse();
          // console.log(result)
          this.carts = result;
        })
        .catch(err => {
          console.log(err);
          alert(err);
        });
    },
    deleteHistory(id) {
      if (!window.confirm(`确认删除?`)) {
        return;
      }
      this.axios
        .delete("/carts/" + id + "/.json")
        .then(res => {
          // console.log(res)
          this.getHistory();
        })
        .catch(err => {
          console.log(err);
          alert(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.cursor-pointer {
  cursor: pointer;
}
/* .history-box{
  max-height:60vh;
  overflow:auto;
} */
</style>