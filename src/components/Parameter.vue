<template>
  <div>
    <b-sidebar class="text-center" visible no-header-close>
      <router-link to="/admin/parameter"><b-button pill variant="primary">参数设置</b-button></router-link>
      <router-link to="/admin/situation"><b-button pill variant="primary">特情管理</b-button></router-link>
    </b-sidebar>
    <b-container class="col-3" style="margin-top: 20px">
      <h1>系统参数设置</h1>
      <small>此参数应由专业人员配置，站点工作人员请勿随意更改！</small>
      <form @submit="submit">
        <b-textarea v-model="form.config" style="height: 200px" placeholder="如果您不清楚如何配置，请勿修改！"/>
        <b-button type="submit" variant="primary" style="margin-top: 10px">提交</b-button>
      </form>
    </b-container>
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
        url: "/api/parameter",
        data: qs.stringify({
          config: this.form.config,
        })
      }).then(resp => {
        if (resp.data !== "success")
          alert("配置保存错误！")
        else
          alert("配置保存成功！")
      }).catch(e => {
        console.log(e)
        alert("后端服务器错误")
        this.$router.push({path: '/admin/login'})
      })
    }
  }
}
</script>

<style scoped>

</style>