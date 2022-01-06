<template>
  <div class="login">
    <div class="row mt-3">
      <div class="card mx-auto">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/images/icon.png" alt="" />
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input class="form-control" type="email" v-model="email" />
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input class="form-control" type="password" v-model="password" />
            </div>
            <button class="btn btn-block btn-success" type="submit">
              登录
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      axios.get('/users.json').then((res) => {
        // console.log(res.data) //确认能否获取数据
        const data = res.data
        const users = []
        //数据转化为数组
        for (let key in data) {
          const user = data[key]
          users.push(user)
        }
        // console.log(users) //检验数组

        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password
        })
        // console.log(result)//检验用户输入的跟数据库里的是否对应
        if (result !=null&& result.length>0){
            this.$router.push({name:'home'})
        }else{
            alert('请输入正确的账号或密码！')
        }
      })
    },
  },
}
</script>

<style scoped></style>
