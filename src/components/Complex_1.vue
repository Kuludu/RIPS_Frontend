<template>
  <div>
    <b-container>
      <h1 class="mt-3 mb-3">复杂查询-站点出/入动态图</h1>
      <b-card class="mb-3">
        <b-row>
          <b-col>
            <VueCtkDateTimePicker
                v-model="time_begin"
                button-now-translation="现在"
                format="YYYY-MM-DD HH:mm"
                label="请选择统计开始时间"/>
          </b-col>
          <b-col>
            <VueCtkDateTimePicker
                v-model="time_end"
                button-now-translation="现在"
                format="YYYY-MM-DD HH:mm"
                label="请选择统计结束时间"/>
          </b-col>
          <b-col cols="1">
            <b-button v-b-popover.hover.top="'温馨提示：复杂查询对服务器压力较大，请谨慎提交！'"
                      variant="primary"
                      @click="submit">
              提交
            </b-button>
          </b-col>
        </b-row>
        <b-overlay :show="overlay_show" class="mt-3">
          <div id="chart" class="chart"/>
          <template #overlay>
            <div class="text-center">
              <b-icon animation="spin" font-scale="5" icon="arrow-clockwise"/>
              <p>数据加载中...</p>
            </div>
          </template>
        </b-overlay>
      </b-card>
    </b-container>
    <b-modal ref="info" header-bg-variant="info" title="轨道交通智能预测系统-复杂查询">
      <p>请选择或完整填写信息!</p>
    </b-modal>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统-复杂查询">
      <p>操作失败!您的登陆信息已过期或后端服务器错误。</p>
    </b-modal>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "Complex_1",
  data: function () {
    return {
      time_begin: null,
      time_end: null,
      overlay_show: false
    }
  },
  methods: {
    submit() {
      if (this.time_begin != null && this.time_end != null) {
        this.overlay_show = true;
        this.axios({
          method: "post",
          url: "/api/complex/1",
          data: qs.stringify({
            time_begin: this.time_begin,
            time_end: this.time_end
          })
        }).then(resp => {
          console.log(resp)
          this.overlay_show = false;
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
.chart {
  height: 800px;
}
</style>