<template>
  <div>
    <b-container>
      <h1 class="mt-3 mb-3">轨道交通历史数据查询</h1>
      <b-card title="简单查询">
        <b-form-group label="年份选择">
          <b-form-select v-model="year_selected">
            <b-form-select-option value="null">请选择年份</b-form-select-option>
            <b-form-select-option value="2020">2020年</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="线路选择">
          <b-form-select v-model="line_selected">
            <b-form-select-option value="null">请选择线路</b-form-select-option>
            <b-form-select-option disabled value="1">1号线</b-form-select-option>
            <b-form-select-option disabled value="2">2号线</b-form-select-option>
            <b-form-select-option disabled value="3">3号线</b-form-select-option>
            <b-form-select-option disabled value="4">4号线</b-form-select-option>
            <b-form-select-option value="5">5号线</b-form-select-option>
            <b-form-select-option disabled value="6">6号线</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <b-button variant="primary" @click="select">选择</b-button>
      </b-card>
      <b-card class="mt-3" title="复杂查询">
        <b-list-group>
          <router-link to="/complex/1"><b-list-group-item button>站点出/入动态图</b-list-group-item></router-link>
        </b-list-group>
        <b-alert class="mt-3" dismissible show variant="info">请注意，复杂查询直接在大数据系统上执行，对系统压力较大！</b-alert>
      </b-card>
    </b-container>
    <b-modal ref="info" header-bg-variant="info" title="轨道交通智能预测系统-历史数据">
      <p>请选择或完整填写信息!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "HistoryNav",
  data: function () {
    return {
      year_selected: null,
      line_selected: null,
      complex_selected: null
    }
  },
  methods: {
    select() {
      if (this.year_selected != null && this.line_selected != null) {
        this.$router.push({path: '/history/' + this.year_selected + '/' + this.line_selected})
      } else {
        this.$refs['info'].show();
      }
    }
  }
}
</script>

<style scoped>

</style>