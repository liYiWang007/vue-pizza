<template>
  <!-- 复杂版 多级验证（世界的尽头是if） -->
  <div class="register">
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
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input class="form-control" type="password" v-model="confirmPassword" />
            </div>
            <button class="btn btn-block btn-success" type="submit">
              注册
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
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    onSubmit() {
      axios.get('users.json').then((res) => {
        // console.log(res)//检验获取数据
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          users.push(user)
        }
        // console.log(users)//检验是否成功转化为数组
        let result = users.filter((user) => {
          return user.email === this.email
        })
        if (result.length > 0) {
          alert('邮箱已注册')
        } else {
          if (
            this.password === this.confirmPassword &&
            this.password !== null &&
            this.password !== '' &&
            this.email !== null &&
            this.email !== ''
          ) {
            if (this.password.length < 8) {
              alert('密码最少8位')
            } else {
              const FormData = {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword,
              }
              axios
                .post('/users.json', FormData)
                .then((res) => this.$router.push({ name: 'login' }))
            }
          } else {
            if (this.password === '' || this.password === null) {
              alert('密码不能为空')
            } else if (this.email === '' || this.email === null) alert('邮箱不能为空')
          }
        }
      })
    },
  },
}
</script>

<style scoped></style>
