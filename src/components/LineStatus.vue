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
      let line = this.echarts.init(document.getElementById('line'));
      line.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        title: {
          text: '5号线',
          subtext: '线路状态',
          left: 'center'
        },
        series: [
          {
            type: 'map',
            map: 'line_5',
            selectedMode: false
          },
          {
            type: 'gauge',
            center: ['70%', '50%'],
            radius: '30%',
            data: [
              {
                value: 50,
                name: '线路压力'
              }
            ]
          }
        ]
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