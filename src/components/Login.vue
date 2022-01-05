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
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style scoped></style>
