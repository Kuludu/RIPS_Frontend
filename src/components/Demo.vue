<template>
  <div>
    <b-sidebar class="text-center" visible no-header-close>
      <router-link to="/admin/parameter">参数设置</router-link>
      <router-link to="/admin/demo">测试演示</router-link>
    </b-sidebar>
    <div class="container col-md-2" style="margin-top: 20px">
      <h1>测试演示</h1>
      <small>此功能仅供测试与演示使用，生产环境勿操作！</small>
      <b-form @submit="submit">
        <b-form-group
            id="situation-group"
            label="特情选择:"
        >
          <b-form-select v-model="form.situation" label="轨交特情">
            <b-form-select-option value="0">请选择特情</b-form-select-option>
            <b-form-select-option value="1">雨雪特情</b-form-select-option>
            <b-form-select-option value="2" disabled>暴恐特情</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-form-group
            id="traffic-group"
            label="实时流量:"
        >
          <b-input-group append="人">
            <b-form-input v-model="form.traffic" type="number" placeholder="请输入模拟增加的客流量"/>
          </b-input-group>
        </b-form-group>
        <b-button type="submit" variant="primary" style="margin-top: 10px">提交</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "Demo",
  data: function() {
    return {
      form: {
        situation: "",
        traffic: ""
      }
    }
  },
  methods: {
    submit: function(event) {
      event.preventDefault()
      this.axios({
        method: "post",
        url: this.API.server + "/api/parameter",
        data: qs.stringify({
          config: this.form.config,
        })
      }).then(resp => {
        if (resp === "fail")
          alert("演示数据上传错误！")
        else
          alert("演示数据上传成功！")
      }).catch(e => {
        console.log(e)
        alert("后端服务器错误")
      })
    }
  }
}
</script>

<style scoped>
a, a:hover {
  text-decoration: none;
  color: black;
  border-style: solid;
  border-radius: 25px;
  border-color: black;
}
</style>