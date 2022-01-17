<template>
  <div>
    <b-sidebar class="text-center" visible no-header-close>
      <router-link to="/admin/parameter"><b-button pill variant="primary">参数设置</b-button></router-link>
      <router-link to="/admin/situation"><b-button pill variant="primary">特情管理</b-button></router-link>
    </b-sidebar>
    <div class="container col-md-6" style="margin-top: 20px">
      <h1>特情管理</h1>
      <b-table
          :items="items"
          :fields="fields"
          select-mode="multi"
          responsive="sm"
          ref="selectableTable"
          selectable
          @row-selected="onRowSelected"
      >
        <template #cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
        <template #table-caption>当前全部特情</template>
      </b-table>
      <p>
        <b-button-group>
          <b-button variant="primary">删除</b-button>
          <b-button variant="primary">激活</b-button>
          <b-button variant="primary">隐藏</b-button>
        </b-button-group>
      </p>

      <b-card title="发布特情">
        <b-form @submit="submit">
          <b-form-group
              label="特情选择:"
          >
            <b-form-select v-model="form.situation" label="轨交特情">
              <b-form-select-option value="0">请选择特情</b-form-select-option>
              <b-form-select-option value="1">雨雪特情</b-form-select-option>
              <b-form-select-option value="2" disabled>暴力恐怖事件</b-form-select-option>
              <b-form-select-option value="3" disabled>设备故障</b-form-select-option>
            </b-form-select>
          </b-form-group>
          <b-form-group
              label="特情名称:"
              class="col-3"
          >
            <b-form-input placeholder="请输入特情名称"></b-form-input>
          </b-form-group>
          <b-form-group
              label="发布时间:"
              class="col-3"
          >
            <b-form-datepicker locale="zh" />
            <b-form-timepicker locale="zh" />
          </b-form-group>
          <b-button type="submit" variant="primary" style="margin-top: 10px">提交</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "SituManage",
  data: function() {
    return {
      form: {
        situation: "",
        traffic: ""
      },
      fields: ['ID', '是否激活', '特情名称', '发布时间'],
      items: [],
      selected: []
    }
  },
  methods: {
    onRowSelected(items) {
      this.selected = items
    },
    submit: function(event) {
      event.preventDefault()
      this.axios({
        method: "post",
        url: "/api/parameter",
        data: qs.stringify({
          config: this.form.config,
        })
      }).then(resp => {
        if (resp.data !== "success")
          alert("特情发布错误！")
        else
          alert("特情发布成功！")
      }).catch(e => {
        console.log(e)
        alert("后端服务器错误")
      })
    }
  }
}
</script>

<style scoped>

</style>