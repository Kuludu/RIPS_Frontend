<template>
  <div>
    <b-container class="col-4 align-middle">
      <b-card>
        <h1 class="mt-3 mb-3">管理员登录</h1>
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

          <b-button style="margin-top: 10px" type="submit" variant="primary">提交</b-button>
        </b-form>
      </b-card>
    </b-container>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统-管理登陆">
      <p>操作失败!您的用户名/密码或后端服务器错误。</p>
    </b-modal>
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
        url: "/api/user/login",
        data: qs.stringify({
          username: this.form.username,
          password: this.form.password
        })
      }).then(resp => {
        if (resp.data === "success") {
          this.$router.push({path: '/admin/situation'})
        } else {
          this.$refs['fail'].show()
        }
      }).catch(e => {
        console.log(e)
        this.$refs['fail'].show()
      })
    }
  }
}
</script>

<style scoped>

</style>