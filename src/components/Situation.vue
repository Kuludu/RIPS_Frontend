<template>
  <div>
    <b-container class="text-center">
      <h1>当前轨道交通系统特殊情况</h1>
      <b-table striped fixed :items="items" :fields="fields" />
    </b-container>
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
      alert("后端服务器错误")
    })
  }
}
</script>

<style scoped>

</style>