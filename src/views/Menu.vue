<template>
  <div class="row">
    <div class="col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in menuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="(option, i) in item.options" :key="i">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button @click="addToCart(item,option)" class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4">
      <div v-if="carts.length==0">购物车内没有商品</div>
      <template v-else>
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in carts" :key="i">
              <td>
                <button @click="decreaseQuantity(item)" class="btn btn-sm btn-outline-primary">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increaseQuantity(item)" class="btn btn-sm btn-outline-primary">+</button>
              </td>
              <td>{{item.name}} {{item.size}}</td>
              <td>{{item.price * item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价: {{totalPrice}} RMB</p>
        <button class="btn btn-success btn-block">提交</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
      /* menuItems: [
        {
          name: "海鲜pizza",
          description: "鲜美的海鲜Pizza，上佳的选择！",
          options: [
            {
              size: 9,
              price: 38
            },
            {
              size: 12,
              price: 48
            }
          ]
        },
        {
          name: "芝士pizza",
          description: "香醇的芝士Pizza，回味无穷！",
          options: [
            {
              size: 9,
              price: 32
            },
            {
              size: 12,
              price: 40
            }
          ]
        },
        {
          name: "原味pizza",
          description: "经典的原味Pizza，简单的滋味！",
          options: [
            {
              size: 9,
              price: 24
            },
            {
              size: 12,
              price: 30
            }
          ]
        }
      ], */
      // menuItems: []
    };
  },
  methods: {
    addToCart(item, option) {
      let cart = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };
      if (this.carts.length > 0) {
        let result = this.carts.filter(el => {
          return el.name == item.name && el.price == option.price;
        });
        if (result && result.length > 0) {
          result[0].quantity++;
        } else {
          this.carts.push(cart);
        }
      } else {
        this.carts.push(cart);
      }
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromCart(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    removeFromCart(item) {
      this.carts.splice(this.carts.indexOf(item), 1);
    },
    getMenuData() {
      /* fetch("https://v-pizza.firebaseio.com/menu.json")
        .then(res => {
          return res.json();
        })
        .then(data => {
          // console.log(data)
          let menuArr = [];
          for (let key in data) {
            data[key].id = key;
            menuArr.push(data[key]);
          }
          this.menuItems = menuArr;
        })
        .catch(err => console.log(err)); */

        /* this.axios.get('https://v-pizza.firebaseio.com/menu.json')
          .then(res => this.menuItems = res.data) */
        this.axios.get('https://v-pizza.firebaseio.com/menu.json')
          .then(res => this.$store.commit('setMenuItems',res.data))
    }
  },
  created() {
    this.getMenuData();
  },
  computed: {
    menuItems(){
      // return this.$store.state.menuItems
      return this.$store.getters.getMenuItems;
    },
    totalPrice() {
      let totalCost = 0;
      for (let i in this.carts) {
        totalCost += this.carts[i].quantity * this.carts[i].price;
      }
      /* console.log(this.$store.state)
      this.$store.dispatch('test','aaa') */
      return totalCost;
    }
  }
};
</script>
