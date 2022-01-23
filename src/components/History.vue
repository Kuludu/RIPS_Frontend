<template>
  <div>
    <b-container class="text-center">
      <h1 class="mt-3 mb-3">{{ this.$route.params.year }}年{{ this.$route.params.line }}号线运营基础数据</h1>
    </b-container>
    <b-row align-h="center" class="mx-0">
      <b-col class="mb-5" cols="8">
        <b-card header="a.单月整体客流分析">
          <div id="c1" class="chart"/>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary" class="mb-5" header="分析员评注" header-bg-variant="primary"
                header-text-variant="white">
          <p>
            单月整体客流体现客流的季节性变化规律，可以通过观察逐月的客流变化情况来合适地调整运营人员安排。
          </p>
        </b-card>
        <b-card border-variant="info" header="数据备注" header-bg-variant="info" header-text-variant="white">
          <p>
            可供非商业分析使用。
          </p>
        </b-card>
      </b-col>
      <b-col class="mb-5" cols="8">
        <b-card header="b.工作日与节假日客流分析">
          <div id="c2" class="chart"/>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary" class="mb-5" header="分析员评注" header-bg-variant="primary"
                header-text-variant="white">
          <p>
            工作日与节假日客流体现客流的一种非季节性变化规律，可以根据政府规划的节假日庆典等情况规划运营人员安排。
          </p>
        </b-card>
        <b-card border-variant="info" header="数据备注" header-bg-variant="info" header-text-variant="white">
          <p>
            可供非商业分析使用。
          </p>
        </b-card>
      </b-col>
      <b-col class="mb-5" cols="8">
        <b-card header="c.单站点出入客流分析">
          <div id="c3" class="chart"/>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary" class="mb-5" header="分析员评注" header-bg-variant="primary"
                header-text-variant="white">
          <p>
            单站点出入客流体现站点的普遍客流压力，为运营资源常态部署调整提供数据依据。
          </p>
        </b-card>
        <b-card border-variant="info" header="数据备注" header-bg-variant="info" header-text-variant="white">
          <p>
            可供非商业分析使用。
          </p>
        </b-card>
      </b-col>
      <b-col class="mb-5" cols="8">
        <b-card header="d.用户年龄结构分析">
          <div id="c4" class="chart"/>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary" class="mb-5" header="分析员评注" header-bg-variant="primary"
                header-text-variant="white">
          <p>
            用户年龄结构体现用户年龄的分布，为运营资源面向不同人群（如老年人、青少年）进行特殊常态部署调整提供数据依据。
          </p>
        </b-card>
        <b-card border-variant="info" header="数据备注" header-bg-variant="info" header-text-variant="white">
          <p>
            可供非商业分析使用。
          </p>
        </b-card>
      </b-col>
      <b-col class="mb-5" cols="8">
        <b-card header="e.早晚高峰客流站点分布分析">
          <div id="c5" class="chart"/>
        </b-card>
      </b-col>
      <b-col cols="2">
        <b-card border-variant="primary" class="mb-5" header="分析员评注" header-bg-variant="primary"
                header-text-variant="white">
          <p>
            早晚高峰客流站点分布体现了上下班高峰期通勤客流流向，可为日常大客流处理作数据依托，合理掉配运营资源。
          </p>
        </b-card>
        <b-card border-variant="info" header="数据备注" header-bg-variant="info" header-text-variant="white">
          <p>
            可供非商业分析使用。
          </p>
        </b-card>
      </b-col>
      <b-col class="mb-5" cols="8">
        <b-card header="f.站点OD客流分析">
          <div id="c6" class="chart"/>
        </b-card>
      </b-col>
      <b-col class="mb-5" cols="2">
        <b-card border-variant="primary" class="mb-5" header="分析员评注" header-bg-variant="primary"
                header-text-variant="white">
          <p>
            "O"即Origin，"D"即Destination，OD图体现站点之间的出行规律，可以根据观察OD图中的出行关系合理调配运力资源。
          </p>
        </b-card>
        <b-card border-variant="info" header="数据备注" header-bg-variant="info" header-text-variant="white">
          <p>
            可供非商业分析使用。
          </p>
        </b-card>
      </b-col>
    </b-row>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统">
      <p>后端服务器错误。</p>
    </b-modal>
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
      url: "/api/history/" + this.$route.params.year + '/' + this.$route.params.line,
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
      this.$refs['fail'].show()
    })
  }
}
</script>

<style scoped>
.chart {
  height: 600px;
}
</style>