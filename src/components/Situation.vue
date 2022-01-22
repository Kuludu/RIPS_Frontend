<template>
  <div>
    <b-container class="text-center">
      <h1>当前轨道交通系统特殊情况</h1>
      <b-table striped fixed :items="items" :fields="fields" />
    </b-container>
    <b-modal header-bg-variant="danger" ref="fail" title="轨道交通智能预测系统" hide-backdrop>
      <p>后端服务器错误。</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Situation",
  data: function () {
    return {
      fields: ['特情名称', '发布时间'],
      items: []
    }
  },
  mounted() {
    this.axios({
      method: "get",
      url: "/api/situation"
    }).then(resp => {
      this.items = resp.data["0"]
    }).catch(e => {
      console.log(e)
      this.$refs['fail'].show()
    })
  }
}
</script>

<style scoped>

</style>