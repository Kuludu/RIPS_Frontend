<template>
  <div class="container col-md-3" style="margin-top: 20px">
    <h1>管理员登陆</h1>
    <b-form @submit="login">
      <b-form-group
          id="username-group"
          label="用户名:"
          label-cols="4"
      >
        <b-form-input
            id="username-input"
            v-model="form.username"
            placeholder="用户名"
            required
            type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="password-group"
          label="密码："
          label-cols="4"
      >
        <b-form-input
            id="password-input"
            v-model="form.password"
            placeholder="密码"
            required
            type="password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" style="margin-top: 10px">提交</b-button>
    </b-form>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "Login",
  data: function () {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login: function (event) {
      event.preventDefault()
      this.axios({
        method: "post",
        url: this.API.server + "/api/login",
        data: qs.stringify({
          username: this.form.username,
          password: this.form.password
        })
      }).then(resp => {
        if (resp === "fail")
          alert("用户名或密码错误！")
        else
            this.$router.push({path: '/admin/parameter'})
      }).catch(() => {
        alert("后端服务器错误")
      })
    }
  }
}
</script>

<style scoped>

</style>