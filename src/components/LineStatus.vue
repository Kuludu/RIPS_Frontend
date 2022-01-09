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
        grid: {
          left: '50%',
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
          left: 'center',
          textStyle: {
            color: 'black',
            fontSize: '50'
          },
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '5号线站点',
            type: 'map',
            map: 'line_5',
            center: [1000, 400],
            selectedMode: false,
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {
                name: '站点1',
                value: 10
              },
              {
                name: '站点2',
                value: 20
              },
              {
                name: '站点3',
                value: 30
              },
              {
                name: '站点4',
                value: 40
              },
              {
                name: '站点5',
                value: 50
              },
              {
                name: '站点6',
                value: 60
              },
              {
                name: '站点7',
                value: 70
              },
              {
                name: '站点8',
                value: 100
              },
            ]
          },
          {
            type: 'gauge',
            center: ['70%', '25%'],
            radius: '25%',
            data: [
              {
                value: 70,
                name: '线路总体压力'
              }
            ]
          },
          {
            name: '线路实时流量(15分钟)',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147, 260]
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