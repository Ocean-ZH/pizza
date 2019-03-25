<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <newPizza v-on:itemAdded="getMenuData" />
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in menuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click.prevent="deleteData(item)" class="btn btn-outline-danger">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import newPizza from './NewPizza.vue'

export default {
    data(){
        return {
            // menuItems:[],
        }
    },
    components:{
        newPizza,
    },
    created(){
        this.getMenuData()
    },
    methods:{
        deleteData(item){
            if(!window.confirm(`确认删除${item.name}?`)){
                return null;
            }
            fetch("https://v-pizza.firebaseio.com/menu/" + item.id + "/.json",{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json',
                },
            })
            .then(res=>{
                return res.json()
            })
            // eslint-disable-next-line
            .then(data=>{
                // console.log(data)
                // this.getMenuData();
                this.$store.commit('removeMenuItem',item)
            })
            .catch(err=>console.log(err))
        },
        getMenuData(){
            fetch("https://v-pizza.firebaseio.com/menu.json")
                .then(res=>{
                    return res.json()
                })
                .then(data=>{
                    // console.log(data)
                    let menuArr = [];
                    for(let key in data){
                        data[key].id = key;
                        menuArr.push(data[key])
                    }
                    // this.getMenuItems = menuArr;
                    this.$store.commit('setMenuItems',menuArr)
                })
                .catch(err=>console.log(err))
        },
    },
    computed:{
        menuItems(){
            // return this.$store.state.menuItems
            return this.$store.getters.getMenuItems;
        }
    },
    /* beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        console.log('beforeRouteEnter')
        next(vm=>{
            console.log(vm)
        })
    }, */
}
</script>
