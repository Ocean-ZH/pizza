<template>
    <div class="row">
        <div class="col col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody  v-for="item in menuItems" :key="item.name" >
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size" >
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button 
                        @click="addToCart(item,option)"
                        class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col col-sm-12 col-md-4">
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
                            <button class="btn btn-sm btn-outline-primary">-</button>
                            <span>1</span>
                            <button class="btn btn-sm btn-outline-primary">+</button>
                        </td>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                    </tr>
                </tbody>
                <p>总价: </p>
                <button class="btn btn-success btn-block">提交</button>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            carts:[

            ],
            menuItems:[{
                name:'海鲜pizza',
                description:'鲜美的海鲜Pizza，上佳的选择！',
                options:[{
                    size:9,
                    price:38,
                },{
                    size:12,
                    price:48,
                }]
            },{
                name:'芝士pizza',
                description:'香醇的芝士Pizza，回味无穷！',
                options:[{
                    size:9,
                    price:32,
                },{
                    size:12,
                    price:40,
                }]
            },{
                name:'原味pizza',
                description:'经典的原味Pizza，简单的滋味！',
                options:[{
                    size:9,
                    price:24,
                },{
                    size:12,
                    price:30,
                }]
            },],
        }
    },
    methods:{
        addToCart(item,option){
            this.carts.push({
                name:item.name,
                size:option.size,
                price:option.price,
            })
        },
    },
}
</script>
