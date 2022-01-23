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
            <b-table :fields="fields" :items="items" fixed no-border-collapse sticky-header="800px" striped>
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
    let line = this.echarts.init(document.getElementById('line'));
    const parser = new DOMParser();
    const line_5 =
        "<svg width=\"1370\" height=\"900\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        " <title>毕业设计-车站线路</title>\n" +
        " <g id=\"Layer_1\">\n" +
        "  <title>line_5</title>\n" +
        "  <line stroke=\"#bfbf00\" stroke-dasharray=\"5,5\" fill=\"none\" stroke-width=\"10\" x1=\"463.98186\" y1=\"88.40089\" x2=\"463.98186\" y2=\"722.35158\" id=\"svg_1\"/>\n" +
        "  <line stroke=\"#bfbf00\" stroke-dasharray=\"5,5\" fill=\"none\" stroke-width=\"10\" x1=\"149.37503\" y1=\"88.40089\" x2=\"149.37503\" y2=\"722.35158\" id=\"svg_2\"/>\n" +
        "  <line stroke=\"#bfbf00\" stroke-dasharray=\"5,5\" fill=\"none\"  stroke-width=\"10\" x1=\"150.4167\" y1=\"718.75001\" x2=\"467.1262\" y2=\"718.75001\" id=\"svg_3\"/>\n" +
        "  <circle name=\"站点1\" stroke=\"null\" r=\"30\" cy=\"89.95012\" cx=\"149.99651\" id=\"svg_4\"/>\n" +
        "  <circle name=\"站点2\" stroke=\"null\" r=\"30\" cy=\"290.76027\" cx=\"148.99651\" id=\"svg_5\"/>\n" +
        "  <circle name=\"站点3\" stroke=\"null\" r=\"30\" cy=\"507.57166\" cx=\"148.99651\" id=\"svg_6\"/>\n" +
        "  <circle name=\"站点4\" stroke=\"null\" r=\"30\" cy=\"718.81752\" cx=\"148.99651\" id=\"svg_7\"/>\n" +
        "  <circle name=\"站点5\" stroke=\"null\" r=\"30\" cy=\"718.76146\" cx=\"465.03246\" id=\"svg_8\"/>\n" +
        "  <circle name=\"站点6\" stroke=\"null\" r=\"30\" cy=\"509.69681\" cx=\"464.14045\" id=\"svg_9\"/>\n" +
        "  <circle name=\"站点7\" stroke=\"null\" r=\"30\" cy=\"291.14973\" cx=\"464.52746\" id=\"svg_10\"/>\n" +
        "  <circle name=\"站点8\" stroke=\"null\" r=\"30\" cy=\"92.23925\" cx=\"464.52746\" id=\"svg_11\"/>\n" +
        " </g>\n" +
        "</svg>";

    this.echarts.registerMap('line_5', {svg: parser.parseFromString(line_5, 'text/xml')});
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
          text: '5号线',
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
        visualMap: {
          min: 0,
          max: 100,
          left: 'center',
          orient: 'horizontal',
          realtime: true,
          text: ['高', '低'],
          calculable: true,
          inRange: {
            color: ['green', 'red']
          }
        },
        xAxis: {
          type: 'category',
          data: ['前45～30分钟流量', '前15～30分钟流量', '前15分钟流量', '预计15分内流量']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '5号线站点',
            type: 'map',
            map: 'line_5',
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
  height: 900px;
}
</style>