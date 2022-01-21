<template>
  <div>
    <b-sidebar class="text-center" no-header-close visible>
      <router-link to="/admin/parameter">
        <b-button pill variant="primary">参数设置</b-button>
      </router-link>
      <router-link to="/admin/situation">
        <b-button pill variant="primary">特情管理</b-button>
      </router-link>
    </b-sidebar>
    <b-container class="col-6 mt-3">
      <h1>系统参数设置</h1>
      <small>此参数应由专业人员配置，站点工作人员请勿随意更改！</small>
      <b-card title="站点压力阈值">
        <b-row>
          <b-col>
            <b-form-select v-model="line_selected" :options="line_options"/>
          </b-col>
          <b-col>
            <b-form-select v-model="site_selected" :options="site_options[this.line_selected]" @change="refresh_site"/>
          </b-col>
        </b-row>
        <p class="mt-3">当前站点压力阈值：{{ this.site_pressure_threshold }}</p>
        <b-form-input class="col-3" placeholder="请输入新设置的压力阈值" type="number" v-model="new_threshold"></b-form-input>
        <b-button class="mt-3" @click="submit_threshold">提交</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "Parameter",
  data: function () {
    return {
      line_selected: null,
      site_selected: null,
      new_threshold: null,
      line_options: [
        {value: null, text: '请选择线路'},
        {value: '1', text: '1号线', disabled: true},
        {value: '2', text: '2号线', disabled: true},
        {value: '3', text: '3号线', disabled: true},
        {value: '4', text: '4号线', disabled: true},
        {value: '5', text: '5号线'},
        {value: '6', text: '6号线', disabled: true},
      ],
      site_options: {
        null: [{
          value: null,
          text: '请先选择线路'
        }],
        '5': [
          {value: null, text: '请选择站点'},
          {value: '1', text: '站点1'},
          {value: '2', text: '站点2'},
          {value: '3', text: '站点3'},
          {value: '4', text: '站点4'},
          {value: '5', text: '站点5'},
          {value: '6', text: '站点6'},
          {value: '7', text: '站点7'},
          {value: '8', text: '站点8'}
        ]
      },
      site_pressure_threshold: 0
    }
  },
  methods: {
    refresh_site() {
      this.axios({
        method: "post",
        url: "/api/parameter/getThreshold",
        data: qs.stringify({
          line: this.line_selected,
          site: this.site_selected,
        })
      }).then(resp => {
        this.site_pressure_threshold = resp.data['threshold'];
      }).catch(e => {
        console.log(e)
        alert("后端服务器错误")
      })
    },
    submit_threshold() {
      this.axios({
        method: "post",
        url: "/api/parameter/setThreshold",
        data: qs.stringify({
          line: this.line_selected,
          site: this.site_selected,
          threshold: this.new_threshold
        })
      }).then(resp => {
        if (resp.data !== "success")
          alert("配置保存错误！")
        else
          alert("配置保存成功！")
        this.refresh_site()
      }).catch(e => {
        console.log(e)
        alert("后端服务器错误")
      })
    }
  }
}
</script>

<style scoped>

</style>