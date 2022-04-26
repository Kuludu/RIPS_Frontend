<template>
  <div>
    <b-row class="mx-0">
      <b-col cols="8">
        <b-overlay :show="overlay_table" rounded="sm">
          <div id="site" class="chart_height"></div>
          <template #overlay>
            <div class="text-center">
              <b-icon animation="spin" font-scale="5" icon="arrow-clockwise"/>
              <p>数据加载中...</p>
            </div>
          </template>
        </b-overlay>
      </b-col>
      <b-col>
        <b-overlay :show="overlay_table" rounded="sm">
          <div class="chart_height">
            <b-table :fields="fields" :items="items" no-border-collapse sticky-header="800px" striped>
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
  name: "SiteStatus",
  data: function () {
    return {
      fields: ['出/入站', '时间'],
      items: [],
      overlay_chart: true,
      overlay_table: true
    }
  },
  mounted() {
    let site = this.echarts.init(document.getElementById('site'));
    this.axios({
      method: "get",
      url: "/api/site/" + this.$route.params.line + "/" + this.$route.params.site
    }).then(resp => {
      site.setOption({
        title: {
          text: '线路' + this.$route.params.line + '站点' + this.$route.params.site + '运行状态',
          y: 'up',
          left: 'center',
          textStyle: {
            color: 'black',
            fontSize: '40'
          }
        },
        tooltip: {
          trigger: 'item',
        },
        grid: {
          left: '40%',
          right: '10%',
          bottom: '10%',
          top: '10%',
          containLabel: true
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
            name: '站点运行压力',
            type: 'gauge',
            center: ['20%', '25%'],
            radius: '35%',
            max: 1,
            detail: {
              formatter: function (value) {
                return value.toFixed(2)
              }
            },
            data: [
              {
                value: resp.data["realPressure"],
                name: '实际运行压力'
              }
            ]
          },
          {
            name: '站点运行压力',
            type: 'gauge',
            center: ['20%', '65%'],
            radius: '35%',
            max: 1,
            detail: {
              formatter: function (value) {
                return value.toFixed(2)
              }
            },
            data: [
              {
                value: resp.data["prePressure"],
                name: '预计运行压力'
              }
            ]
          },
          {
            name: '线路流量',
            type: 'bar',
            data: resp.data["trend"]
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
      url: "/api/traffic/" + this.$route.params.line + "/" + this.$route.params.site,
    }).then(resp => {
      this.items = resp.data["traffic"];
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
  height: 800px;
}
</style>