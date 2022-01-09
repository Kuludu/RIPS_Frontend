<template>
  <div>
    <div id="line" style="height: 900px"></div>
  </div>
</template>

<script>
import line_5 from '@/assets/line_5.svg';

export default {
  name: "LineStatus",
  data() {
    return {}
  },
  mounted() {
    this.axios({
      method: 'get',
      url: line_5
    }).then(resp => {
      const parser = new DOMParser();
      this.echarts.registerMap('line_5', {svg: parser.parseFromString(resp.data, 'text/xml')});
      let myChart = this.echarts.init(document.getElementById('line'));
      myChart.setOption({
        title: {
          text: '5号线',
          subtext: '线路状态',
          left: 'center'
        },
        geo: {
          map: 'line_5',
        }
      })
    }).catch(e => {
      console.log(e)
      alert('加载SVG错误！')
    })
  }
}
</script>

<style scoped>

</style>