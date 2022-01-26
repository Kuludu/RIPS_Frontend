<template>
  <div>
    <b-container>
      <h1 class="mt-3 mb-3">复杂查询-站点出/入动态图</h1>
      <b-card class="mb-5">
        <b-card header="参数项">
          <b-form-group label="统计开始时间">
            <VueCtkDateTimePicker
                v-model="time_begin"
                button-now-translation="现在"
                format="YYYY-MM-DD HH:mm"
                label="请选择统计开始时间"/>
          </b-form-group>
          <b-form-group label="统计结束时间">
            <VueCtkDateTimePicker
                v-model="time_end"
                button-now-translation="现在"
                format="YYYY-MM-DD HH:mm"
                label="请选择统计结束时间"/>
          </b-form-group>
          <b-form-group label="更新速度（毫秒）">
            <b-form-spinbutton v-model="refresh_time" min="200" max="2000" step="100"/>
          </b-form-group>
          <b-button v-b-popover.hover.top="'温馨提示：复杂查询对服务器压力较大，请谨慎提交！'"
                    variant="primary"
                    @click="submit">
            提交
          </b-button>
        </b-card>
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
      overlay_show: false,
      refresh_time: 1200,
      chart: null
    }
  },
  mounted() {
    this.chart = this.echarts.init(document.getElementById('chart'));
    this.chart.setOption({
      title: {
        text: "使用鼠标滚轮和左键可以缩放与拖拽"
      },
      toolbox: {
        feature: {
          dataView: {}
        }
      },
      tooltip: {},
      layout: "force",
      series: [
        {
          type: 'graph',
          zoom: 4,
          roam: true,
          label: {
            show: true
          },
          symbolSize: 15,
          lineStyle: {
            width: 5
          }
        }
      ]
    });
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
          let data = resp.data['data'];
          let links = resp.data['links'];
          let chart = this.chart;

          chart.setOption({
            series: [
              {
                data: data,
                links: links,
              }
            ]
          });

          let counter = 0;
          let timer = setInterval(function () {
            if (counter > 0) {
              links[counter - 1]['lineStyle'] = {
                color: "blue"
              }
            }
            links[counter]['value']++;
            links[counter]['lineStyle'] = {
              color: "red"
            };
            chart.setOption({
              series: [
                {
                  links: links
                }
              ]
            });

            counter++;
            if (counter >= links.length) {
              clearInterval(timer);
            }
          }, this.refresh_time);
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
  border-style: solid;
  border-width: 1px;
  background-color: aliceblue;
  height: 800px;
}
</style>