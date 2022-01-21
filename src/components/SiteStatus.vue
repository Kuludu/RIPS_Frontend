<template>
  <div>
    <b-row class="mx-0">
      <b-col cols="8">
        <div id="site" style="height: 900px"></div>
      </b-col>
      <b-col>
        <b-table :fields="fields" :items="items" fixed striped>
          <template #table-caption>15min出入站数据</template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SiteStatus",
  data: function () {
    return {
      fields: ['出/入站', '时间'],
      items: []
    }
  },
  mounted() {
    let site = this.echarts.init(document.getElementById('site'));
    site.setOption({
      title: {
        text: '{a|}',
        subtext: '正在加载中！',
        x: 'center',
        y: 'center',
        itemGap: -20,
        textStyle: {
          rich: {
            a: {
              color: '#000',
              fontSize: '16',
              height: 100,
              width: 180,
              backgroundColor: {
                image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA2NCA0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPg0KICAgIDxlbGxpcHNlIGZpbGw9IiNkZGQiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3IiAvPg0KICAgIDxnIGZpbGxSdWxlPSJub256ZXJvIiBzdHJva2U9IiM5OTkiPg0KICAgICAgPHBhdGgNCiAgICAgICAgZD0iTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0eiIgLz4NCiAgICAgIDxwYXRoDQogICAgICAgIGQ9Ik00MS42MTMgMTUuOTMxYzAtMS42MDUuOTk0LTIuOTMgMi4yMjctMi45MzFINTV2MTguMTM3QzU1IDMzLjI2IDUzLjY4IDM1IDUyLjA1IDM1aC00MC4xQzEwLjMyIDM1IDkgMzMuMjU5IDkgMzEuMTM3VjEzaDExLjE2YzEuMjMzIDAgMi4yMjcgMS4zMjMgMi4yMjcgMi45Mjh2LjAyMmMwIDEuNjA1IDEuMDA1IDIuOTAxIDIuMjM3IDIuOTAxaDE0Ljc1MmMxLjIzMiAwIDIuMjM3LTEuMzA4IDIuMjM3LTIuOTEzdi0uMDA3eiINCiAgICAgICAgZmlsbD0iI2UxZTFlMSIgLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg==',
              }
            },
          }
        },
        subtextStyle: {
          fontSize: 24,
        }
      }
    })
    this.axios({
      method: "get",
      url: "/api/site/" + this.$route.params.id,
    }).then(resp => {
      this.items = resp.data["traffic"]
      site.setOption({
        title: {
          text: '站点运行状态',
          subtext: null,
          y: 'up',
          left: 'center',
          textStyle: {
            color: 'black',
            fontSize: '40'
          },
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
          data: ['前45～30分钟流量', '前15～30分钟流量', '前15分钟流量', '预计15分内流量']
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
      })
    }).catch(e => {
      console.log(e)
      alert("后端服务器错误")
    })
  }
}
</script>

<style scoped>

</style>