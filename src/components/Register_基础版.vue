<template>
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
  name: 'Registerbak',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirmPassword) {
        const FormData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
        axios.post('/users.json', FormData).then((res) => this.$router.push({ name: 'login' }))
      } else {
        alert('密码不一致')
      }
    },
  },
}
</script>

<style scoped></style>
