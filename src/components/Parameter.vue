<template>
  <div>
    <div class="container col-md-3" style="margin-top: 20px">
      <b-button variant="outline-primary" href="/#/admin/demo">测试演示</b-button>
      <h1>系统参数设置</h1>
      <small>此参数应由专业人员配置，站点工作人员请勿随意更改！</small>
      <form @submit="submit">
        <b-textarea v-model="form.config" style="height: 200px">

        </b-textarea>
        <b-button type="submit" variant="primary" style="margin-top: 10px">提交</b-button>
      </form>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "Parameter",
  data: function () {
    return {
      form: {
        config: ""
      }
    }
  },
  methods: {
    submit: function (event) {
      event.preventDefault()
      this.axios({
        method: "post",
        url: this.API.server + "/api/parameter",
        data: qs.stringify({
          config: this.form.config,
        })
      }).then(resp => {
        if (resp === "fail")
          alert("配置保存错误！")
        else
          alert("配置保存成功！")
      }).catch(() => {
        alert("后端服务器错误")
      })
    }
  }
}
</script>

<style scoped>

</style>