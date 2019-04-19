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
                <input type="email" class="form-control" v-model="email" required>
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" class="form-control" v-model="password" required>
              </div>
              <div class="form-group">
                <label for="confirmPwd">确认密码</label>
                <input type="password" class="form-control" v-model="confirmPwd" required>
              </div>
              <button type="submit" class="btn btn-block btn-success">注册</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPwd: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirmPwd) {
        const formData = {
          email: this.email,
          password: this.password,
        };
        // console.log(this.axios)
        this.axios.get('/users.json')
          .then(res=>{
            //判断是否已有账号
            let data = res.data;
            let users = [];
            for(let key in data){
              users.push(data[key].email);
            }
            let result = null;
            result = users.some((el,i)=>{
              return el == this.email;
            })
            if(result){
              alert('账号已存在！')
            }else{
              this.axios.post('/users.json',formData)
              .then(res=>{
                    console.log(res)
                    this.$router.push({name:'login'})
              })
              .catch(err=>{
                console.log(err)
                alert(err)
              })
            }
          })
          .catch(err=>{
            console.log(err);
            alert(err);
        });
      }else{
          alert('2次密码不一致')
      }
    }
  },
};
</script>
