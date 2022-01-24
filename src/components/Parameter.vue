<template>
  <div>
    <b-sidebar no-header-close title="管理界面选项" visible>
      <div class="p-3 text-center">
        <router-link to="/admin/parameter">
          <b-button block pill size="lg" variant="primary">参数设置</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/situation">
          <b-button block pill size="lg" variant="primary">特情管理</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/bigdata">
          <b-button block pill size="lg" variant="primary">大数据管理</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/user">
          <b-button block pill size="lg" variant="primary">用户管理</b-button>
        </router-link>
      </div>
    </b-sidebar>
    <b-container class="col-6">
      <h1 class="mt-3 mb-3">系统参数设置</h1>
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
        <b-form-input v-model="new_threshold" class="col-3" placeholder="请输入新设置的压力阈值" type="number"></b-form-input>
        <b-button class="mt-3" @click="submit_threshold">提交</b-button>
      </b-card>
    </b-container>
    <b-modal ref="success" header-bg-variant="success" title="轨道交通智能预测系统-参数设置">
      <p>操作成功!</p>
    </b-modal>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统-参数设置">
      <p>操作失败!您的登陆信息已过期或后端服务器错误。</p>
    </b-modal>
    <b-modal ref="info" header-bg-variant="info" title="轨道交通智能预测系统-参数设置">
      <p>请选择或完整填写信息!</p>
    </b-modal>
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
      if (this.line_selected != null && this.site_selected != null) {
        this.axios({
          method: "post",
          url: "/api/parameter/threshold/get",
          data: qs.stringify({
            line: this.line_selected,
            site: this.site_selected,
          })
        }).then(resp => {
          this.site_pressure_threshold = resp.data['threshold'];
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.site_pressure_threshold = 0;
      }
    },
    submit_threshold() {
      if (this.line_selected != null && this.site_selected != null && this.new_threshold != null) {
        this.axios({
          method: "post",
          url: "/api/parameter/threshold/set",
          data: qs.stringify({
            line: this.line_selected,
            site: this.site_selected,
            threshold: this.new_threshold
          })
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
          this.refresh_site()
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.$refs['info'].show();
      }
    }
  }
}
</script>

<style scoped>

</style>