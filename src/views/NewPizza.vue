<template>
    <div>
        <form>
            <h3 class="text-muted my-5">
                添加新的Pizza
            </h3>
            <div class="form-group row">
                <label class="col-sm-1">品种</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.name">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-1">描述</label>
                <div class="col-sm-11">
                    <textarea class="form-control" rows="5" v-model="newPizza.description" ></textarea>
                </div>
            </div>
            <p><strong>选项1</strong></p>
            <div class="form-group row">
                <label class="col-sm-1">尺寸</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.size1">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-1">价格</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.price1">
                </div>
            </div>
            <p><strong>选项2</strong></p>
            <div class="form-group row">
                <label class="col-sm-1">尺寸</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.size2">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-1">价格</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.price2">
                </div>
            </div>
            <div class="form-group row">
                <button @click.prevent="addMenuItem" class="btn btn-success btn-block">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newPizza:{

            }
        }
    },
    methods:{
        addMenuItem(){
            // console.log(this.newPizza)
            let data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[{
                    size:this.newPizza.size1,
                    price:this.newPizza.price1,
                },{
                    size:this.newPizza.size2,
                    price:this.newPizza.price2,
                },]
            }

            /* fetch("https://v-pizza.firebaseio.com/menu.json",{
                method:"post",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(data),
            })
                .then(res=>{
                    // console.log(res)
                    return res.json()
                })
                // eslint-disable-next-line
                .then(data=>{
                    console.log(this.$store.state)
                    // this.$router.push({name:'menu'})
                    this.$emit('itemAdded')
                })
                .catch(err=>console.log(err)) */
                this.axios.post('menu.json',data)
                    .then(res=>{
                        // console.log(res)
                        data.id = res.data.name;
                        this.$store.commit('addMenuItem',data)
                    })
        },
    }
}
</script>
