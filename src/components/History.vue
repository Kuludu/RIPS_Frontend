<template>
  <div>
    <b-container class="text-center">
      <h1>上年5号线运营基础数据</h1>
    </b-container>
    <b-row align-h="center" style="margin-right: 0">
      <b-col cols="8">
        <h2>a.单月整体客流分析</h2>
        <div id="c1" class="chart" />
      </b-col>
      <b-col cols="2">
        <h3>分析员评注：</h3>
        <p>
          xxx
        </p>
      </b-col>
      <b-col cols="8">
        <h2>b.工作日和周末客流分析</h2>
        <div id="c2" class="chart" />
      </b-col>
      <b-col cols="2">
        <h3>分析员评注：</h3>
        <p>
          xxx
        </p>
      </b-col>
      <b-col cols="8">
        <h2>c.单站点出入客流分析</h2>
        <div id="c3" class="chart" />
      </b-col>
      <b-col cols="2">
        <h3>分析员评注：</h3>
        <p>
          xxx
        </p>
      </b-col>
      <b-col cols="8">
        <h2>d.用户年龄结构分析</h2>
        <div id="c4" class="chart" />
      </b-col>
      <b-col cols="2">
        <h3>分析员评注：</h3>
        <p>
          xxx
        </p>
      </b-col>
      <b-col cols="8">
        <h2>e.早晚高峰客流站点分布分析</h2>
        <div id="c5" class="chart" />
      </b-col>
      <b-col cols="2">
        <h3>分析员评注：</h3>
        <p>
          xxx
        </p>
      </b-col>
      <b-col cols="8">
        <h2>f.站点OD客流分析</h2>
        <div id="c6" class="chart" />
      </b-col>
      <b-col cols="2">
        <h3>分析员评注：</h3>
        <p>
          xxx
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "History",
  mounted() {
    let c1 = this.echarts.init(document.getElementById("c1"));
    let c2 = this.echarts.init(document.getElementById("c2"));
    let c3 = this.echarts.init(document.getElementById("c3"));
    let c4 = this.echarts.init(document.getElementById("c4"));
    let c5 = this.echarts.init(document.getElementById("c5"));
    let c6 = this.echarts.init(document.getElementById("c6"));
    this.axios({
      method: "get",
      url: this.API.server + "/api/history",
      responseType: "json",
    }).then(resp => {
      c1.setOption(resp.data.c1);
      c2.setOption(resp.data.c2);
      c3.setOption(resp.data.c3);
      c4.setOption(resp.data.c4);
      c5.setOption(resp.data.c5);
      c6.setOption(resp.data.c6);
    }).catch(e => {
      console.log(e)
      alert("后端服务器错误")
    })
  }
}
</script>

<style scoped>
.chart {
  height: 600px;
}
#c1, #c2, #c3, #c4, #c5, #c6 {
  margin-bottom: 30px;
}
</style>