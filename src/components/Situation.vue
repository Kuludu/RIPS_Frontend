<template>
  <div>
    <b-container class="text-center">
      <h1 class="mt-3 mb-3">当前轨道交通系统特殊情况</h1>
      <b-table :fields="fields" :items="items" fixed striped/>
    </b-container>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统">
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