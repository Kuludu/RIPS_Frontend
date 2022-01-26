<template>
  <div>
    <b-row class="mx-0">
      <b-col class="col-8">
        <b-overlay :show="overlay_table" rounded="sm">
          <div id="line" class="chart_height"></div>
          <template #overlay>
            <div class="text-center">
              <b-icon animation="spin" font-scale="5" icon="arrow-clockwise"/>
              <p>数据加载中...</p>
            </div>
          </template>
        </b-overlay>
      </b-col>
      <b-col cols="4">
        <b-overlay :show="overlay_table" rounded="sm">
          <div class="chart_height">
            <b-table :fields="fields" :items="items" no-border-collapse sticky-header="850px" striped>
              <template #table-caption>5min出入站数据</template>
            </b-table>
          </div>
          <template #overlay>
            <div class="text-center">
              <b-icon animation="spin" font-scale="5" icon="arrow-clockwise"/>
              <p>数据加载中...</p>
            </div>
          </template>
        </b-overlay>
      </b-col>
    </b-row>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统">
      <p>后端服务器错误。</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "LineStatus",
  data: function () {
    return {
      fields: ['站点', '出/入站', '时间'],
      items: [],
      overlay_chart: true,
      overlay_table: true
    }
  },
  mounted: function () {
    let line = this.echarts.init(document.getElementById('line'))
    this.axios({
      method: "get",
      url: "/api/line/" + this.$route.params.id
    }).then(resp => {
      line.setOption({
        grid: {
          left: '40%',
          right: '10%',
          bottom: '10%',
          top: '40%',
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
        },
        title: {
          text: this.$route.params.id + '号线',
          subtext: '线路运行状态',
          y: 'top',
          left: 'center',
          itemGap: 10,
          textStyle: {
            color: 'black',
            fontSize: '50'
          },
          subtextStyle: {
            fontSize: 14,
          }
        },
        xAxis: {
          type: 'category',
          data: ['前60～45分钟流量', '前45～30分钟流量', '前15～30分钟流量', '前15分钟流量', '预计15分内流量']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '站点',
            type: 'map',
            map: 'line_' + this.$route.params.id,
            center: [830, 400],
            selectedMode: false,
            emphasis: {
              label: {
                show: true
              }
            },
            data: resp.data['siteReal']
          },
          {
            type: 'gauge',
            center: ['50%', '25%'],
            radius: '25%',
            max: 1,
            detail: {
              formatter: function (value) {
                return value.toFixed(2)
              }
            },
            data: [
              {
                value: resp.data['realPressure'],
                name: '实际运行压力'
              }
            ]
          },
          {
            type: 'gauge',
            center: ['80%', '25%'],
            radius: '25%',
            max: 1,
            detail: {
              formatter: function (value) {
                return value.toFixed(2)
              }
            },
            data: [
              {
                value: resp.data['prePressure'],
                name: '预计运行压力'
              }
            ]
          },
          {
            name: '线路流量',
            type: 'bar',
            data: resp.data['lineTrend']
          }
        ]
      });
      this.overlay_chart = false;
    }).catch(e => {
      console.log(e);
      this.$refs['fail'].show();
    });
    this.axios({
      method: "get",
      url: "/api/traffic/" + this.$route.params.id + "/0"
    }).then(resp => {
      this.items = resp.data['traffic'];
      this.overlay_table = false;
    }).catch(e => {
      console.log(e);
      this.$refs['fail'].show();
    });
  }
}
</script>

<style scoped>
.chart_height {
  height: 850px;
}
</style>