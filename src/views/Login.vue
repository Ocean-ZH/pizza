<template>
    <div class="container">
        <div class="row">
            <div class="col col-md-12 col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <img src="@/assets/eyunfm06iaabvmyyqpwl.png" class="mx-auto d-block" alt="pizza">
                        <form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="email">邮箱</label>
                                <input type="email" class="form-control" v-model="email" required />
                            </div>
                            <div class="form-group">
                                <label for="password">密码</label>
                                <input type="password" class="form-control" v-model="password" required />
                            </div>
                            <button type="submit" class="btn btn-block btn-success">登录</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        onSubmit(){
            this.axios.get('/users.json')
                .then(res=>{
                    // console.log(res)
                    let data = res.data;
                    let users = [];
                    for(let key in data){
                        data[key].id = key;
                        users.push(data[key])
                    }
                    // console.log(users)
                    let result = users.filter((el)=>{
                        return el.email === this.email && el.password === el.password;
                    })
                    // console.log(result)
                    if(result != null && result.length>0){
                        // console.log(result[0])
                        this.$store.dispatch('setUser', result[0])
                        this.$router.push({name:'home'})
                        window.localStorage.setItem('currentUser', result[0].email)
                        window.localStorage.setItem('userId', result[0].id)
                    }else{
                        this.$store.dispatch("setUser",null)
                        alert('Username or password invalid!')
                    }
                })
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.$store.dispatch("setUser",null)
            window.localStorage.setItem('currentUser', '')
            window.localStorage.setItem('userId', '')
        })
    }
}
</script>
